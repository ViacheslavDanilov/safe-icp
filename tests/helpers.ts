import { expect, type Page } from '@playwright/test';

export const SLIDE_COUNT = 20;

/** Content may reach this far past a slide edge (sub-pixel rounding, focus rings). */
const CLIP_TOLERANCE_PX = 4;

/**
 * Open the deck and wait for hydration: the counter renders only once
 * PresentationController has mounted, so its effects and key handlers are live.
 * Returns the page's errors and console errors, collected for the rest of the test.
 */
export async function openDeck(page: Page, path = '/') {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto(path);
  await expect(page.locator('.slide')).toHaveCount(SLIDE_COUNT);
  await expect(counter(page)).toHaveText(/^\d{2} \/ \d{2}$/);
  return errors;
}

/** The counter text, e.g. "07 / 20". Hidden in flow mode but still rendered. */
export const counter = (page: Page) => page.locator('.slide-counter span[aria-hidden]');

export const slideLabel = (n: number) => `${String(n).padStart(2, '0')} / ${SLIDE_COUNT}`;

/** 1-based position of the slide with this class, so tests survive a reorder. */
export function slideNumber(page: Page, slideClass: string) {
  return page.evaluate(
    (cls) =>
      [...document.querySelectorAll('.slide')].findIndex((s) => s.classList.contains(cls)) + 1,
    slideClass,
  );
}

/** Jump the deck (snap mode) to slide n without smooth scrolling. */
export async function jumpToSlide(page: Page, n: number) {
  await page.evaluate((index) => {
    const deck = document.querySelector<HTMLElement>('.deck')!;
    deck.style.scrollBehavior = 'auto';
    deck.scrollTop = document.querySelectorAll<HTMLElement>('.slide')[index].offsetTop;
  }, n - 1);
  await expect(counter(page)).toHaveText(slideLabel(n));
}

/**
 * Slides whose visible content reaches more than the tolerance above their top edge
 * or below their bottom edge. Content inside a scroll container (on phones the model zoo
 * table and the metrics board scroll sideways on purpose) counts by the container's own
 * box, since it can be scrolled into view. Side effect: marks every slide visited so
 * entrance animations do not affect the measurement.
 */
export function clippedSlides(page: Page) {
  return page.evaluate((tolerance) => {
    document.querySelectorAll('.slide').forEach((s) => s.classList.add('visited'));
    return [...document.querySelectorAll<HTMLElement>('.slide')]
      .map((slide, index) => {
        const box = slide.getBoundingClientRect();
        let bottom = 0;
        let top = 0;
        slide.querySelectorAll('.slide-content *').forEach((el) => {
          for (let up = el.parentElement; up && up !== slide; up = up.parentElement) {
            const { overflowX, overflowY } = getComputedStyle(up);
            if (/auto|scroll/.test(overflowX + overflowY)) return;
          }
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height) return;
          bottom = Math.max(bottom, r.bottom - box.top);
          top = Math.min(top, r.top - box.top);
        });
        return {
          slide: index + 1,
          below: Math.max(0, Math.round(bottom - box.height)),
          above: Math.round(-top),
        };
      })
      .filter((s) => s.below > tolerance || s.above > tolerance);
  }, CLIP_TOLERANCE_PX);
}

/** Entrance-animated elements that have not been revealed yet. */
export function countUnrevealed(page: Page) {
  return page.evaluate(
    () =>
      document.querySelectorAll('.animate-in:not(.is-visible), .cascade-reveal:not(.is-visible)')
        .length,
  );
}

/** Dispatch a keydown straight to the deck's window listener; true if it was handled. */
type KeyFlags = Partial<Record<'repeat' | 'shiftKey' | 'metaKey' | 'ctrlKey' | 'altKey', boolean>>;

export function keyReachesDeck(page: Page, key: string, init: KeyFlags = {}) {
  return page.evaluate(
    ([k, extra]) => {
      const event = new KeyboardEvent('keydown', {
        key: k,
        bubbles: true,
        cancelable: true,
        ...extra,
      });
      window.dispatchEvent(event);
      return event.defaultPrevented;
    },
    [key, init] as const,
  );
}

/** Per video: its slide number, whether it plays, its preload and whether it has a poster. */
export function videoState(page: Page) {
  return page.evaluate(() =>
    [...document.querySelectorAll('video')].map((v) => ({
      slide: [...document.querySelectorAll('.slide')].indexOf(v.closest('.slide')!) + 1,
      playing: !v.paused,
      preload: v.preload,
      poster: !!v.poster,
    })),
  );
}
