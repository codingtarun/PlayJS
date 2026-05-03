# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

PlayJS is Tarun's JavaScript learning/practice repo and public portfolio. Each topic or mini-app lives on its own `day_N` branch (`day_1` … `day_23` exist on `origin`). `master` is periodically reset to a bare scaffold to start the next exercise — the most recent commit (`90a4f42 Reset the project`) did exactly that, so the working tree is intentionally near-empty (empty `index.html`, no `src/`).

When asked to "start" or "build" something here, assume you are filling in this empty scaffold, not extending existing code. Prior implementations are recoverable from the `day_*` branches if the user asks for reference.

The site is published to GitHub Pages at https://codingtarun.github.io/PlayJS/ and is intended to grow into a "living portfolio" hub (see [DOCS/PORTFOLIO-APP-IDEAS.md](DOCS/PORTFOLIO-APP-IDEAS.md)).

## Plan & target

[DOCS/](DOCS/) contains the 6-month plan to land a 25 LPA full-stack Node + React role by 2026-11-03:
- [DOCS/ROADMAP.md](DOCS/ROADMAP.md) — week-by-week (skills + DSA + projects + system design tracks)
- [DOCS/SKILL-GAPS.md](DOCS/SKILL-GAPS.md) — recruiter-perspective gap analysis
- [DOCS/PORTFOLIO-APP-IDEAS.md](DOCS/PORTFOLIO-APP-IDEAS.md) — what to build on GitHub Pages

When suggesting what to work on, anchor to the current week of [DOCS/ROADMAP.md](DOCS/ROADMAP.md). Tarun has Laravel/PHP backend experience — frame Node/React/Prisma explanations against Laravel equivalents and skip backend basics he already has.

## Stack

- **Vite** (installed in `node_modules`, not pinned in `package.json`) as dev server / bundler. Entry is `index.html`.
- **Tailwind CSS v4** wired via the official Vite plugin in [vite.config.js](vite.config.js). v4 uses the plugin only — there is no `tailwind.config.js` or PostCSS config, and styles are pulled in with `@import "tailwindcss";` from a CSS file rather than the v3 `@tailwind` directives.

## Commands

`package.json` does not define `dev`/`build` scripts (the only script is a placeholder `test`). Run Vite directly:

```bash
npx vite           # dev server
npx vite build     # production build to dist/
npx vite preview   # serve the built output
```

No linter or test runner is configured.