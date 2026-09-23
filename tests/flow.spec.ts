import { expect, test, type Page } from '@playwright/test';
import { measureClipping, openDeck } from './helpers';

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
    expect(errors).toEqual([]);
  });

  test('reveals every slide while scrolling, however tall', async ({ page }) => {
    await openDeck(page);
    await scrollThrough(page);
    const hidden = await page.evaluate(
      () =>
        document.querySelectorAll('.animate-in:not(.is-visible), .cascade-reveal:not(.is-visible)')
          .length,
    );
    expect(hidden).toBe(0);
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
      const clipped = (await measureClipping(page)).filter((s) => s.below > 4 || s.above > 4);
      expect(clipped).toEqual([]);
      const hidden = await page.evaluate(
        () => document.querySelectorAll('.animate-in:not(.is-visible)').length,
      );
      expect(hidden).toBe(0);
    });
  }
});
