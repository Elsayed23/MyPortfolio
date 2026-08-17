# My Portfolio

Welcome to the repository for my personal portfolio! This repository contains the code for my portfolio website, where you can learn more about me, explore my projects, and get in touch.

## Overview

- **[Live Portfolio](https://elsayed-dev.vercel.app/)**
- **[Check out my resume](/ElsayedResume.pdf)** (local: `public/ElsayedResume.pdf`)

## Project layout

| Path | Purpose |
|------|---------|
| `app/` | App Router: root `layout.jsx`, `globals.css`, `providers.jsx`, `not-found.jsx`, and `app/(site)/` routes |
| `app/(site)/home/` | Home page sections (colocated with `/`) |
| `app/(site)/about/`, `contact/`, `projects/` | Route `page.jsx` + view components colocated per segment |
| `components/` | Shared UI: `layout/`, `experience/`, `not-found/`, `other/`, `ui/` (shadcn-style: Input, Textarea, Label; `lib/utils.js` — `cn()`) |
| `constants/` | Data modules (`projects`, `timeline`, nav links, skills) |
| `images/` | Images imported by the bundle |
| `lib/` | Shared helpers |
| `public/` | Static assets served as-is |

Imports use the `@/` alias (`@/components/...`, `@/constants/...`, `@/images/...`) from the repository root.

## Routes (Next.js App Router)

Public URLs: `/`, `/about`, `/projects`, `/contact`. Run the site with `npm run dev`.

For **GitHub Pages** later, enable static export in `next.config.mjs` (`output: 'export'`) and set `basePath` / `assetPrefix` to match the repo name; deploy the `out` directory.

## Experience timeline

Career and education entries live in `constants/timeline.js` and are shown on the About page. Replace the placeholder items with your own roles and dates; entries are sorted newest-first automatically.

## Design tokens

Shared colors and typography are defined as CSS variables in `app/globals.css` and exposed to Tailwind as `portfolio-*` colors in `tailwind.config.js`.
