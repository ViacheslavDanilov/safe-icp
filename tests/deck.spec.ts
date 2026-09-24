import { expect, test } from '@playwright/test';
import { counter, jumpToSlide, measureClipping, openDeck, slideLabel } from './helpers';

// Snap-mode deck: the presenter's view on a laptop or a big screen.
test.describe('desktop deck', () => {
  test.skip(({ isMobile }) => isMobile, 'desktop only');

  test('renders all slides without console errors', async ({ page }) => {
    const errors = await openDeck(page);
    await expect(counter(page)).toHaveText(slideLabel(1));
    await expect(page.locator('h1')).toHaveCount(1);
    expect(errors).toEqual([]);
  });

  test('clicker and keyboard keys step through the slides', async ({ page }) => {
    await openDeck(page);
    const steps: [string, number][] = [
      ['PageDown', 2],
      ['Space', 3],
      ['ArrowDown', 4],
      ['ArrowRight', 5],
      ['Shift+Space', 4],
      ['PageUp', 3],
      ['ArrowLeft', 2],
      ['End', 20],
      ['Home', 1],
    ];
    for (const [key, slide] of steps) {
      await page.keyboard.press(key);
      await expect(counter(page), `after ${key}`).toHaveText(slideLabel(slide));
    }
  });

  test('a quick second clicker press is not lost', async ({ page }) => {
    await openDeck(page);
    await page.keyboard.press('PageDown');
    await page.waitForTimeout(80);
    await page.keyboard.press('PageDown');
    await expect(counter(page)).toHaveText(slideLabel(3));
  });

  test('leaves arrow keys with modifiers to the browser', async ({ page }) => {
    await openDeck(page);
    const prevented = await page.evaluate(() =>
      [{}, { metaKey: true }, { ctrlKey: true }, { altKey: true }].map((modifiers) => {
        const event = new KeyboardEvent('keydown', {
          key: 'ArrowLeft',
          bubbles: true,
          cancelable: true,
          ...modifiers,
        });
        window.dispatchEvent(event);
        return event.defaultPrevented;
      }),
    );
    expect(prevented).toEqual([true, false, false, false]);
  });

  test('lightbox opens a figure at full size and keeps the deck still', async ({ page }) => {
    await openDeck(page);
    await jumpToSlide(page, 13);

    await page.locator('.qualitative-figure-frame').click();
    const dialog = page.locator('dialog.image-lightbox');
    await expect(dialog).toBeVisible();
    // Largest next/image candidate, not the one sized for the inline slot
    await expect(dialog.locator('img')).toHaveAttribute('src', /w=3840/);

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('PageDown');
    await expect(counter(page)).toHaveText(slideLabel(13));

    await dialog.locator('img').click();
    await expect(dialog).toBeHidden();

    await page.locator('.qualitative-figure-frame').focus();
    await page.keyboard.press('Enter');
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(page.locator('.qualitative-figure-frame')).toBeFocused();
  });

  test('the address follows the slide and restores it on reload', async ({ page }) => {
    await openDeck(page, '/#7');
    await expect(counter(page)).toHaveText(slideLabel(7));

    await page.keyboard.press('ArrowDown');
    await expect(counter(page)).toHaveText(slideLabel(8));
    await expect(page).toHaveURL(/#8$/);

    await page.reload();
    await expect(counter(page)).toHaveText(slideLabel(8));

    await page.keyboard.press('Home');
    await expect(counter(page)).toHaveText(slideLabel(1));
    await expect(page).toHaveURL(/\/$/);
  });

  test('plays only the videos of the current slide', async ({ page }) => {
    await openDeck(page);
    await jumpToSlide(page, 4);

    const state = () =>
      page.evaluate(() =>
        [...document.querySelectorAll('video')].map((v) => ({
          slide: [...document.querySelectorAll('.slide')].indexOf(v.closest('.slide')!) + 1,
          playing: !v.paused,
          preload: v.preload,
        })),
      );

    await expect
      .poll(async () => (await state()).filter((v) => v.playing).map((v) => v.slide))
      .toEqual([4, 4]);
    const videos = await state();
    // Slide 6 is two slides away: nothing is fetched for it yet.
    expect(videos.filter((v) => v.slide === 6).map((v) => v.preload)).toEqual(['none', 'none']);
  });
});

test.describe('no slide is cut off', () => {
  test.skip(({ isMobile }) => isMobile, 'desktop viewports only');

  // A 1080p screen, a laptop, a laptop browser window and a 720p projector.
  for (const [width, height] of [
    [1920, 1080],
    [1440, 900],
    [1366, 768],
    [1536, 730],
    [1280, 720],
  ]) {
    test(`at ${width}x${height}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await openDeck(page);
      const clipped = (await measureClipping(page)).filter((s) => s.below > 4 || s.above > 4);
      expect(clipped).toEqual([]);
    });
  }
});

test.describe('reduced motion', () => {
  test.use({ reducedMotion: 'reduce' });

  test('nothing autoplays and the informative clip gets controls', async ({ page }) => {
    await openDeck(page);
    const videos = await page.evaluate(() =>
      [...document.querySelectorAll('video')].map((v) => ({
        playing: !v.paused,
        controls: v.controls,
        labelled: v.hasAttribute('aria-label'),
      })),
    );
    expect(videos.some((v) => v.playing)).toBe(false);
    expect(videos.filter((v) => v.controls)).toEqual([
      { playing: false, controls: true, labelled: true },
    ]);
  });
});
