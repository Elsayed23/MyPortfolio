# Research: Portfolio UI Refactor and Work Timeline

**Feature**: `001-ui-refactor-timeline`  
**Date**: 2026-03-22

## 1. Timeline placement and navigation

**Decision**: Add a dedicated route (e.g. `/experience`) and a matching main nav item (“Experience” or “Timeline”), implemented with the existing `HashRouter` as `#/experience`.

**Rationale**: Satisfies FR-004 and SC-001 (find timeline within one–two steps from any page). A dedicated route is easier to link and test than an About-page anchor alone.

**Alternatives considered**:

- **Timeline only on About (scroll)**: Fewer routes, but recruiters may miss it below the fold; harder to satisfy “dedicated section” wording without a clear in-page TOC.
- **Separate full URL path without HashRouter change**: Would require switching to `BrowserRouter` and server rewrites on deploy—out of scope and risks constitution “unplanned migration.”

## 2. Visual system and refactor approach

**Decision**: Introduce a small set of CSS custom properties in `index.css` for background, surface, primary text, muted text, accent, and spacing rhythm; refactor components to use those tokens plus Tailwind utilities (`text-[var(--…)]` or `@apply` in limited cases). Keep `@material-tailwind/react` for buttons/inputs where it reduces churn; align variants to the same palette.

**Rationale**: Meets FR-001 (consistent visual language) without replacing the component library or ejecting from CRA.

**Alternatives considered**:

- **Remove Material Tailwind entirely**: High churn for marginal gain on a small site.
- **Tailwind-only, no CSS variables**: Harder to tweak theme globally later.

## 3. Motion and accessibility

**Decision**: Use `useReducedMotion` from `framer-motion` (or `matchMedia('(prefers-reduced-motion: reduce)')`) to skip or shorten route transitions and non-essential hero/section animations.

**Rationale**: Aligns with constitution Principle IV and spec edge cases.

**Alternatives considered**:

- **Disable all Framer Motion**: Loses polish for users who want motion.
- **Ignore reduced motion**: Fails constitution and spec.

## 4. Timeline data shape and ordering

**Decision**: Store entries as an ordered array in source code; sort by `endDate` descending with `current`/`null` end treated as “present” so newest-first is explicit in data or in a small `sort` helper.

**Rationale**: FR-007 requires consistent chronological order; newest-first matches recruiter scanning (SC-002).

**Alternatives considered**:

- **Oldest-first**: Valid if documented; newest-first chosen for scan speed.

## 5. Baseline Web Vitals (SC-003)

**Decision**: Before merging, run Lighthouse (mobile) on Home and the new Experience page locally on production build; record LCP, INP, CLS in `quickstart.md` or team notes and compare to a screenshot/log from the same tool pre-change.

**Rationale**: Spec requires no regression; CRA apps need an explicit baseline because field data is unavailable in-repo.

**Alternatives considered**:

- **Rely on Vercel Analytics only**: Useful post-deploy but does not block merge without historical comparison.
