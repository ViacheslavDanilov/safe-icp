import { expect, type Page } from '@playwright/test';

export const SLIDE_COUNT = 20;

export async function openDeck(page: Page, path = '/') {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto(path);
  await expect(page.locator('.slide')).toHaveCount(SLIDE_COUNT);
  return errors;
}

/** The counter text, e.g. "07 / 20". Hidden in flow mode but still rendered. */
export const counter = (page: Page) => page.locator('.slide-counter span[aria-hidden]');

export const slideLabel = (n: number) => `${String(n).padStart(2, '0')} / ${SLIDE_COUNT}`;

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
 * For every slide, how far its visible content reaches past the slide's bottom
 * edge. Content inside horizontal scrollers is ignored; it is meant to overflow.
 */
export function measureClipping(page: Page) {
  return page.evaluate(() => {
    document.querySelectorAll('.slide').forEach((s) => s.classList.add('visited'));
    return [...document.querySelectorAll<HTMLElement>('.slide')].map((slide, index) => {
      const box = slide.getBoundingClientRect();
      let bottom = 0;
      let top = 0;
      slide.querySelectorAll('.slide-content *').forEach((el) => {
        if (el.closest('.modelzoo-table-wrap, .metrics-board')) return;
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
    });
  });
}
