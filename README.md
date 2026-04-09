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

SafeICP is a presentation site for a research project on non-invasive intracranial pressure monitoring. The site walks through the full pipeline: clinical motivation, optical sensing, hardware translation, ML inference, quantitative and qualitative evidence, and future roadmap.

## Slide Deck

| #   | Slide       | Topic                                |
| --- | ----------- | ------------------------------------ |
| 1   | Prelude     | Speaker introduction                 |
| 2   | Hero        | Project overview                     |
| 3   | Problem     | Why ICP monitoring matters           |
| 4   | Contrast    | Invasive vs non-invasive             |
| 5   | System      | SafeICP measurement pipeline         |
| 6   | Hardware    | Lab rig to bedside device            |
| 7   | Sensing     | Optical sensing logic                |
| 8   | Data        | ML training setup                    |
| 9   | Inference   | Signal-to-ICP mapping                |
| 10  | Qualitative | Model behavior and prediction traces |
| 11  | Metrics     | Quantitative results                 |
| 12  | Meaning     | Interpretation of findings           |
| 13  | Future      | Impact and next steps                |
| 14  | Conclusion  | Clinical refinement path             |
| 15  | Collab      | Consortium partners                  |
| 16  | Team        | Team members                         |
| 17  | Q&A         | Questions, answers, and contact      |

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

## Tech Stack

- **Framework** — Next.js 16 with App Router and React 19
- **Styling** — Tailwind CSS v4 + custom CSS design system
- **Typography** — Inter (headings) + IBM Plex Sans (body) via `next/font`
- **Animations** — CSS keyframes with staggered entrance system and `prefers-reduced-motion` support
- **Presentation** — Full-viewport scroll-snap slides with keyboard navigation

## License

MIT
