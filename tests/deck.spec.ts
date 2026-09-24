import { expect, test, type Page } from '@playwright/test';
import {
  SLIDE_COUNT,
  clippedSlides,
  counter,
  jumpToSlide,
  keyReachesDeck,
  openDeck,
  slideLabel,
  slideNumber,
  videoState,
} from './helpers';

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
      ['End', SLIDE_COUNT],
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

  test('a press long after a manual scroll counts from where the deck is', async ({ page }) => {
    await openDeck(page);
    await page.keyboard.press('PageDown');
    await expect(counter(page)).toHaveText(slideLabel(2));
    await jumpToSlide(page, 1);
    await page.waitForTimeout(1100);
    await page.keyboard.press('PageDown');
    await expect(counter(page)).toHaveText(slideLabel(2));
  });

  test('a held key (auto-repeat) moves one slide', async ({ page }) => {
    await openDeck(page);
    expect(await keyReachesDeck(page, 'PageDown', { repeat: true })).toBe(true);
    await page.waitForTimeout(800);
    await expect(counter(page)).toHaveText(slideLabel(1));
  });

  test('leaves arrow keys with modifiers to the browser', async ({ page }) => {
    await openDeck(page);
    const prevented = [];
    for (const modifiers of [{}, { metaKey: true }, { ctrlKey: true }, { altKey: true }]) {
      prevented.push(await keyReachesDeck(page, 'ArrowLeft', modifiers));
    }
    expect(prevented).toEqual([true, false, false, false]);
  });

  test('lightbox opens a figure at full size and keeps the deck still', async ({ page }) => {
    await openDeck(page);
    const slide = await slideNumber(page, 'slide-qualitative');
    await jumpToSlide(page, slide);

    // The inline figure is lazy-loaded; wait until the slide has actually loaded it.
    await expect
      .poll(() =>
        page
          .locator('.qualitative-image')
          .evaluate((img: HTMLImageElement) => img.complete && !!img.currentSrc),
      )
      .toBe(true);
    const inline = await page.locator('.qualitative-image').evaluate((img: HTMLImageElement) => ({
      src: img.currentSrc,
      // Width the image needs in full view: fitted inside the screen, at device pixels
      needed:
        Math.min(innerWidth, (innerHeight * img.naturalWidth) / img.naturalHeight) *
        devicePixelRatio,
    }));
    // Hold back every other image variant so the first frame of full view is observable.
    await page.route('**/_next/image**', async (route) => {
      if (route.request().url() !== inline.src) await new Promise((r) => setTimeout(r, 800));
      await route.continue();
    });
    await page.locator('.qualitative-figure-frame').click();
    const dialog = page.locator('dialog.image-lightbox');
    await expect(dialog).toBeVisible();
    // Opens at once with the image the slide already loaded...
    await expect(dialog.locator('img')).toHaveAttribute('src', inline.src);
    // ...then swaps to a candidate that covers the screen.
    await expect
      .poll(async () => {
        const src = await dialog.locator('img').getAttribute('src');
        return Number(/w=(\d+)/.exec(src ?? '')?.[1]);
      })
      .toBeGreaterThanOrEqual(Math.min(inline.needed, 3840));

    // While it is open, no key reaches the deck.
    for (const key of ['ArrowDown', 'PageDown', ' ']) {
      expect(await keyReachesDeck(page, key), key).toBe(false);
    }

    // A click on the image closes it.
    await dialog.locator('img').click();
    await expect(dialog).toBeHidden();

    // So does a clicker key, without moving the deck; the next press advances.
    await page.locator('.qualitative-figure-frame').click();
    await expect(dialog).toBeVisible();
    await page.keyboard.press('PageDown');
    await expect(dialog).toBeHidden();
    await page.waitForTimeout(600);
    await expect(counter(page)).toHaveText(slideLabel(slide));
    await page.keyboard.press('PageDown');
    await expect(counter(page)).toHaveText(slideLabel(slide + 1));
    await jumpToSlide(page, slide);

    // Enter and Space on a focused figure open it, and Space does not also advance.
    const frame = page.locator('.qualitative-figure-frame');
    for (const key of ['Enter', 'Space']) {
      await frame.focus();
      await page.keyboard.press(key);
      await expect(dialog, key).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(dialog).toBeHidden();
      await expect(frame).toBeFocused();
      await expect(counter(page)).toHaveText(slideLabel(slide));
    }
  });

  test('Space on a later slide does not reopen an earlier figure', async ({ page }) => {
    await openDeck(page);
    const slide = await slideNumber(page, 'slide-system');
    await jumpToSlide(page, slide);
    await page.locator('.system-figure').click();
    await page.keyboard.press('Escape');
    await expect(page.locator('dialog.image-lightbox')).toBeHidden();

    // The figure keeps focus; two slides later it is off screen.
    await page.keyboard.press('PageDown');
    await page.keyboard.press('PageDown');
    await expect(counter(page)).toHaveText(slideLabel(slide + 2));
    await page.keyboard.press('Space');
    await expect(counter(page)).toHaveText(slideLabel(slide + 3));
    await expect(page.locator('dialog.image-lightbox')).toBeHidden();
  });

  test('the address follows the slide and restores it on reload', async ({ page }) => {
    const errors = await openDeck(page, '/#7');
    await expect(counter(page)).toHaveText(slideLabel(7));

    await page.keyboard.press('ArrowDown');
    await expect(counter(page)).toHaveText(slideLabel(8));
    await expect(page).toHaveURL(/#8$/);

    await page.reload();
    await expect(counter(page)).toHaveText(slideLabel(8));

    // Editing the address mid-talk jumps without a reload.
    await page.evaluate(() => {
      window.location.hash = '#12';
    });
    await expect(counter(page)).toHaveText(slideLabel(12));

    await page.keyboard.press('Home');
    await expect(counter(page)).toHaveText(slideLabel(1));
    await expect(page).toHaveURL(/\/$/);
    expect(errors).toEqual([]);
  });

  for (const hash of ['#0', `#${SLIDE_COUNT + 1}`, '#abc']) {
    test(`an invalid address (${hash}) opens slide 1`, async ({ page }) => {
      const errors = await openDeck(page, `/${hash}`);
      await expect(counter(page)).toHaveText(slideLabel(1));
      expect(errors).toEqual([]);
    });
  }

  test('keeps the current slide when the window crosses into flow mode', async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 768 });
    await openDeck(page, '/#9');
    await page.setViewportSize({ width: 1366, height: 657 }); // leaving full screen
    await page.waitForTimeout(600);
    await expect(counter(page)).toHaveText(slideLabel(9));
    await expect(page).toHaveURL(/#9$/);
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.waitForTimeout(600);
    await expect(counter(page)).toHaveText(slideLabel(9));
  });

  test('plays the current slide, buffers its neighbours, leaves the rest', async ({ page }) => {
    await openDeck(page);
    const contrast = await slideNumber(page, 'slide-contrast');
    const hardware = await slideNumber(page, 'slide-hardware');
    const crossval = await slideNumber(page, 'slide-crossval');
    const between = contrast + 1; // the slide between the two clip slides
    expect(hardware).toBe(contrast + 2);

    await jumpToSlide(page, between);
    await expect
      .poll(async () =>
        (await videoState(page))
          .filter((v) => v.slide === contrast || v.slide === hardware)
          .every((v) => v.preload === 'auto' && v.poster && !v.playing),
      )
      .toBe(true);
    const far = (await videoState(page)).filter((v) => v.slide === crossval);
    expect(far).toEqual([{ slide: crossval, playing: false, preload: 'none', poster: false }]);

    await jumpToSlide(page, contrast);
    await expect
      .poll(async () => (await videoState(page)).filter((v) => v.playing).map((v) => v.slide))
      .toEqual([contrast, contrast]);
  });

  test('a deep link does not load the first slides’ clips', async ({ page }) => {
    await openDeck(page, '/#11');
    await expect(counter(page)).toHaveText(slideLabel(11));
    await page.waitForTimeout(600);
    const early = (await videoState(page)).filter((v) => v.slide <= 2);
    expect(early.every((v) => !v.playing && v.preload === 'none' && !v.poster)).toBe(true);
  });

  test('- and + scale the deck and the scale survives a reload', async ({ page }) => {
    await openDeck(page);
    const rootSize = () =>
      page.evaluate(() => parseFloat(getComputedStyle(document.documentElement).fontSize));
    const start = await rootSize();
    await page.keyboard.press('-');
    await page.keyboard.press('-');
    expect(await rootSize()).toBeCloseTo(start * 0.9, 1);
    await page.reload();
    await expect(counter(page)).toHaveText(slideLabel(1));
    expect(await rootSize()).toBeCloseTo(start * 0.9, 1);
    await page.keyboard.press('0');
    expect(await rootSize()).toBeCloseTo(start, 1);
  });
});

test.describe('presenter zoom', () => {
  test.skip(({ isMobile }) => isMobile, 'snap mode only');

  const rootSize = (page: Page) =>
    page.evaluate(() => parseFloat(getComputedStyle(document.documentElement).fontSize));

  test('+ enlarges only a screen with room to spare, and cuts nothing off', async ({ page }) => {
    for (const [width, height, size] of [
      [1920, 1080, 20],
      [1440, 900, 16],
      [1025, 768, 16],
    ]) {
      await page.setViewportSize({ width, height });
      await openDeck(page);
      for (let i = 0; i < 5; i++) await page.keyboard.press('+');
      expect(await rootSize(page), `root size at ${width}x${height}`).toBeCloseTo(size, 1);
      expect(await clippedSlides(page), `at ${width}x${height}`).toEqual([]);
    }
  });
});

test.describe('no slide is cut off', () => {
  test.skip(({ isMobile }) => isMobile, 'desktop viewports only');

  // A 1080p screen, laptops, laptop browser windows, a 720p projector, and the
  // narrowest and shortest windows that still get the snap deck.
  for (const [width, height] of [
    [1920, 1080],
    [1440, 900],
    [1366, 768],
    [1536, 730],
    [1280, 720],
    [1025, 768],
    [1152, 720],
    [1366, 701],
  ]) {
    test(`at ${width}x${height}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await openDeck(page);
      expect(await clippedSlides(page)).toEqual([]);
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
