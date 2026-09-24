import { expect, test, type Page } from '@playwright/test';
import {
  SLIDE_COUNT,
  clippedSlides,
  counter,
  countUnrevealed,
  openDeck,
  slideLabel,
} from './helpers';

// Flow mode: phones, tablets and short windows get a long page instead of snap panels.

async function scrollThrough(page: Page) {
  const height = await page.evaluate(() => document.body.scrollHeight);
  const step = (page.viewportSize()?.height ?? 800) / 2;
  for (let y = 0; y <= height; y += step) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(60);
  }
}

async function expectFlowMode(page: Page) {
  const deckScrolls = await page.evaluate(() => {
    const deck = document.querySelector<HTMLElement>('.deck')!;
    return deck.scrollHeight > deck.clientHeight;
  });
  expect(deckScrolls).toBe(false);
}

test.describe('phone', () => {
  test.skip(({ isMobile }) => !isMobile, 'mobile only');

  test('flows as a page with no horizontal overflow or console errors', async ({ page }) => {
    const errors = await openDeck(page);
    await expectFlowMode(page);
    const overflow = await page.evaluate(
      () => document.scrollingElement!.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBe(0);
    await scrollThrough(page);
    expect(errors).toEqual([]);
  });

  test('reveals every slide while scrolling, however tall', async ({ page }) => {
    await openDeck(page);
    await scrollThrough(page);
    expect(await countUnrevealed(page)).toBe(0);
  });

  test('tracks a slide taller than the screen as current', async ({ page }) => {
    await openDeck(page);
    const tall = await page.evaluate(() => {
      const slides = [...document.querySelectorAll<HTMLElement>('.slide')];
      const index = slides.findIndex((s) => s.offsetHeight > window.innerHeight * 1.5);
      const slide = slides[index];
      // Put the middle of the screen well inside the slide, away from both edges.
      window.scrollTo(0, slide.offsetTop + slide.offsetHeight / 2 - window.innerHeight / 2);
      return index + 1;
    });
    expect(tall).toBeGreaterThan(1);
    await expect(page).toHaveURL(new RegExp(`#${tall}$`));
  });
});

test.describe('tablet and short windows', () => {
  test.skip(({ isMobile }) => isMobile, 'set their own viewport');

  // iPad landscape, a landscape phone and a short desktop window.
  for (const [width, height] of [
    [1024, 768],
    [844, 390],
    [1280, 680],
  ]) {
    test(`flow mode keeps all content reachable at ${width}x${height}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await openDeck(page);
      await expectFlowMode(page);
      await scrollThrough(page);
      expect(await clippedSlides(page)).toEqual([]);
      expect(await countUnrevealed(page)).toBe(0);
    });
  }

  test('a clicker pages through without stopping between slides', async ({ page }) => {
    // An XGA projector: flow mode, every slide at least one screen tall.
    await page.setViewportSize({ width: 1024, height: 768 });
    await openDeck(page);
    const boundaryInView = () =>
      page.evaluate(() =>
        [...document.querySelectorAll('.slide')].some((s) => {
          const top = s.getBoundingClientRect().top;
          return top > 2 && top < window.innerHeight - 2;
        }),
      );
    const atEnd = () =>
      page.evaluate(
        () => window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2,
      );

    let presses = 0;
    while (!(await atEnd()) && presses < SLIDE_COUNT * 3) {
      await page.keyboard.press('PageDown');
      presses += 1;
      await page.waitForTimeout(700); // smooth scroll
      expect(await boundaryInView(), `stopped between slides after press ${presses}`).toBe(false);
    }
    expect(await atEnd()).toBe(true);

    // Up and down arrows keep native scrolling.
    expect(
      await page.evaluate(() => {
        const event = new KeyboardEvent('keydown', { key: 'ArrowDown', cancelable: true });
        window.dispatchEvent(event);
        return event.defaultPrevented;
      }),
    ).toBe(false);
  });

  test('quick clicker presses land where slow ones do', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await openDeck(page, '/#3');
    const scrollY = () => page.evaluate(() => window.scrollY);
    const start = await scrollY();
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('PageDown');
      await page.waitForTimeout(700);
    }
    const slow = await scrollY();
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), start);
    await page.waitForTimeout(1100); // past the window in which presses chain
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('PageDown');
      await page.waitForTimeout(80);
    }
    await expect.poll(scrollY).toBeCloseTo(slow, -1);
  });

  test('a saved presenter zoom neither resizes the page nor moves a deep link', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.addInitScript(() => localStorage.setItem('safeicp-deck-scale', '1.25'));
    await openDeck(page, '/#15');
    for (let reload = 0; reload < 2; reload++) {
      await page.reload();
      await expect(counter(page)).toHaveText(/^\d{2} \/ \d{2}$/);
      await page.waitForTimeout(700);
      await expect(counter(page)).toHaveText(slideLabel(15));
    }
    await page.keyboard.press('+');
    expect(
      await page.evaluate(() => parseFloat(getComputedStyle(document.documentElement).fontSize)),
    ).toBe(16);
  });

  test('resizing the window keeps the slide on screen', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await openDeck(page, '/#12');
    for (const [width, height] of [
      [700, 768],
      [420, 800],
      [1024, 768],
    ]) {
      await page.setViewportSize({ width, height });
      await page.waitForTimeout(500);
      await expect(counter(page), `at ${width}x${height}`).toHaveText(slideLabel(12));
    }
  });
});
