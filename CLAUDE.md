# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server → http://localhost:5173
npm run build     # Build to /dist
npm run preview   # Preview production build locally
```

Deploy by pushing to GitHub (auto-deploy via Netlify) or dragging `/dist` to netlify.com.

## Architecture

Single-page React app with no backend. All state is client-side only (no database, no API calls, no tracking).

**Page routing** is handled in [src/App.jsx](src/App.jsx) via `useState` — there is no React Router. Pages: `home` → `exam` → `results`, with `disclaimer` accessible from home/results. Exam state (answers, flags, elapsed time) is passed as props to Results for review.

**Pages:**
- [src/pages/Home.jsx](src/pages/Home.jsx) — Landing page with stats and domain breakdown
- [src/pages/Exam.jsx](src/pages/Exam.jsx) — Quiz interface: 240-min timer, question navigator (10×grid), flag system, confirm → review flow
- [src/pages/Results.jsx](src/pages/Results.jsx) — Scaled score (200–1000, pass=700), domain breakdown, question-by-question review
- [src/pages/Disclaimer.jsx](src/pages/Disclaimer.jsx) — Legal/privacy notices

**Questions database** lives in [src/questions.js](src/questions.js) — 238 objects with fields: `id`, `domain`, `question`, `options[]`, `correct` (index 0–3), `explanation`, `source` (MS Learn URL), `sourceLabel`.

Three domains: `"M365 Core Services & Security"`, `"Data Protection & Governance"`, `"Copilot & Agent Administration"`.

## Styling

Tailwind CSS v4 (configured via Vite plugin, no `tailwind.config.js`). Global CSS variables defined in [src/index.css](src/index.css) under `:root` — use these (`--sky`, `--gold`, `--navy`, etc.) rather than hardcoded hex values. Fonts: DM Sans (body) and DM Serif Display (headings) from Google Fonts.

## Deployment

Netlify handles SPA routing via [netlify.toml](netlify.toml) — all routes redirect to `/index.html` with status 200.
