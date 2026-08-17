# Quickstart: Verify UI Refactor and Timeline

**Feature**: `001-ui-refactor-timeline`  
**Date**: 2026-03-22

## Prerequisites

- Node.js compatible with `react-scripts` 5  
- Repository root: `/media/elsayed/react projects/portfolio` (adjust locally)

## Install and run

```bash
cd "/media/elsayed/react projects/portfolio"
npm install
npm start
```

Open the app (typically `http://localhost:3000/` with hash routing).

## Production build (constitution gate)

```bash
npm run build
```

Must complete with zero errors before merge.

## Manual checks (spec acceptance)

1. **Consistency (US1)**: Visit Home, About, Projects, Contact, and the new Experience/Timeline route. Confirm shared typography, spacing, and color usage.
2. **Responsive (FR-003)**: Resize to mobile width; confirm readable text and usable tap targets.
3. **Focus/hover (FR-002)**: Tab through nav links and buttons; confirm visible focus and hover feedback.
4. **Timeline (US2)**: Open the timeline from the main nav within one click. Confirm each entry shows title, organization, timeframe, and optional description; order is newest-first (or documented alternative).
5. **Edge cases**: Single-entry dataset (temporarily): layout holds. Omit `description` on one entry: no crash. Long organization name: wraps cleanly.
6. **Reduced motion**: In OS/browser settings, enable “reduce motion”; reload; non-essential animations should be reduced or disabled.

## Accessibility tooling (SC-004)

```bash
npx eslint src --ext .js,.jsx
```

CRA includes `eslint-plugin-jsx-a11y` via `react-app`. Fix any new violations in touched files. Optional: run axe DevTools in the browser on Home, Experience, and Contact.

## Performance baseline (SC-003)

1. `npm run build && npx serve -s build` (or open the `build` folder with a static server).  
2. Run Lighthouse (Chrome DevTools → Lighthouse, mobile) on `/` and the Experience route.  
3. Record LCP, INP, CLS; compare to values captured on the parent branch before this feature. Regressions require investigation or documented tradeoff in the PR.

## Timeline data

Edit the static timeline array (see `data-model.md` and `contracts/timeline-entry.schema.json`) in the implementation location chosen in tasks (e.g. `src/constants/`). Replace placeholder entries with real career data before release.
