<h1 align="center">SafeICP</h1>

<p align="center">
  <strong>A Safe Window Into Brain Pressure</strong>
</p>

<p align="center">
  Non-invasive intracranial pressure estimation through optical sensing and machine learning.
</p>

<p align="center">
  <a href="https://safe-icp.vercel.app">
    <img src="https://img.shields.io/badge/Live_Site-safe--icp.vercel.app-18B4A1?style=for-the-badge" alt="Live Site" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
</p>

## About

SafeICP is a presentation site for a research project on non-invasive intracranial pressure monitoring. The site walks through the full pipeline: clinical motivation, optical sensing, hardware translation, ML training and benchmarking, quantitative and qualitative evidence, and future roadmap.

## Slide Deck

| #   | Slide       | Topic                                  |
| --- | ----------- | -------------------------------------- |
| 1   | Prelude     | Speaker introduction                   |
| 2   | Hero        | Project overview                       |
| 3   | Problem     | Why ICP monitoring matters             |
| 4   | Contrast    | Invasive vs non-invasive               |
| 5   | System      | SafeICP measurement pipeline           |
| 6   | Hardware    | Lab rig to bedside device              |
| 7   | Sensing     | Optical sensing logic                  |
| 8   | Inference   | Signal-to-ICP mapping                  |
| 9   | Data        | Paired optical and invasive cohorts    |
| 10  | Data Split  | Two-level stratified splitting         |
| 11  | Cross-Val   | 5-fold cross-validation visualization  |
| 12  | Model Zoo   | 10 time-series architectures benchmark |
| 13  | Qualitative | Model behavior and prediction traces   |
| 14  | Metrics     | Quantitative results                   |
| 15  | Meaning     | Interpretation of findings             |
| 16  | Future      | Impact and next steps                  |
| 17  | Conclusion  | Clinical accuracy summary              |
| 18  | Consortium  | Partner institutions                   |
| 19  | Team        | Team members                           |
| 20  | Q&A         | Questions, answers, and contact        |

## Features

- **Scroll-snap deck on desktop**: full-viewport slides that fit every screen from 1280x720 up; above 1920x1080 the whole deck scales with the display, so a 4K screen shows the 1080p layout at 2x
- **Flow mode on tablets, phones and short windows**: at 1024 px wide or 700 px tall and below, slides flow as one long page so dense content never gets cut off
- **Presenter controls**: arrow keys, PageUp/PageDown (presentation clickers), Space and Shift+Space, Home and End
- **Slide in the address**: the URL carries the current slide (`/#7`), so a reload during a talk returns to the same slide and any slide can be linked directly
- **Tap-to-enlarge figures**: click or tap a scientific figure to open it at full resolution; close with a click, ✕ or Escape
- **Light on the network**: videos load and play only when their slide is on screen; the first slide needs about 6 MB
- **Reveal animations**: staggered entrances and a cascade timeline on the problem slide; `prefers-reduced-motion` turns them and video autoplay off
- **Accessible by default**: one `h1`, labelled groups and tables, a skip link, a screen-reader slide counter, focus-visible rings and a keyboard-operable lightbox

## Presenting

Open the site full screen (F11, or Ctrl+Cmd+F on macOS) and step through with a clicker or the keyboard. Above 1080p the deck scales with the screen, which also cancels browser zoom, so use `-` and `+` instead (for example when a TV crops the edges); the scale is remembered.

| Key                       | Action                         |
| ------------------------- | ------------------------------ |
| → ↓ PageDown Space        | Next slide                     |
| ← ↑ PageUp Shift+Space    | Previous slide                 |
| Home / End                | First / last slide             |
| Enter on a focused figure | Enlarge the figure             |
| Escape, or a clicker key  | Close the lightbox             |
| - / + / 0                 | Smaller / larger / reset scale |

## Quick Start

```bash
# Clone & install
git clone https://github.com/ViacheslavDanilov/safe-icp.git
cd safe-icp
pnpm install

# Start development server
pnpm dev
```

Open [localhost:3000](http://localhost:3000) to view the presentation.

| Command         | What it does                                    |
| --------------- | ----------------------------------------------- |
| `pnpm dev`      | Development server                              |
| `pnpm build`    | Production build                                |
| `pnpm lint`     | ESLint                                          |
| `pnpm check`    | Prettier check (run before committing)          |
| `pnpm test:e2e` | Playwright end-to-end tests, desktop and mobile |

## Media

Everything in `public/` is served and referenced by a slide. Videos are H.264 at CRF 20 (at most 1920 px wide, no audio track, faststart) and posters are WebP at quality 95. The uncompressed sources live in `assets/originals/`, mirroring the `public/` layout; that folder is never served.

## Tech Stack

- **Framework**: Next.js 16 with App Router and React 19
- **Styling**: Tailwind CSS v4 plus a plain CSS design system: tokens and the deck in `foundation.css`, shared title, card, label and tag classes in `shared.css`, one stylesheet per slide
- **Typography**: Inter (headings) and IBM Plex Sans (body) via `next/font`
- **Animations**: CSS keyframes with a staggered entrance system and `prefers-reduced-motion` support
- **Lightbox**: native `<dialog>`, no dependencies; opens via a document-delegated click on `.zoomable` elements
- **Tests**: Playwright, run in CI against the production build

## License

MIT
