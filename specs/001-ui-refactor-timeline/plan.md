# Implementation Plan: Portfolio UI Refactor and Work Timeline

**Branch**: `001-ui-refactor-timeline` | **Date**: 2026-03-22 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-ui-refactor-timeline/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Refactor the portfolio’s user interface for visual consistency (typography, spacing, color, layout) across Home, About, Projects, and Contact, while respecting accessibility and motion preferences. Add a work/career timeline backed by structured data in the codebase, exposed as a new primary route reachable from the main navigation within one click. Implementation stays on Create React App + React 18 + React Router + Tailwind and existing UI libraries per the constitution; see [research.md](./research.md) for placement and styling decisions.

## Technical Context

**Language/Version**: JavaScript (ES2020+), React 18.3  
**Primary Dependencies**: `react-scripts` 5, `react-router-dom` 7, Tailwind CSS 3.4, `@material-tailwind/react`, `framer-motion`, Font Awesome / Heroicons as used today  
**Storage**: N/A (static timeline data in source, e.g. `src/constants` or co-located module)  
**Testing**: Jest + React Testing Library via `react-scripts test` (optional per spec; use for critical interactions if desired)  
**Target Platform**: Modern evergreen browsers; responsive viewports (mobile, tablet, desktop)  
**Project Type**: single-page web application (CRA)  
**Performance Goals**: No regression vs pre-refactor Core Web Vitals baseline (LCP, INP/FID, CLS); avoid large new client bundles  
**Constraints**: Constitution stack fidelity; `npm run build` and ESLint `react-app` must pass; WCAG 2.1 AA on primary paths; `prefers-reduced-motion` for non-essential animation  
**Scale/Scope**: ~5 main views/routes; timeline supports 1–15+ entries without layout breakage

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Verify against `.specify/memory/constitution.md` (Portfolio Constitution):

- [x] **Stack fidelity**: No new framework or build tool; CRA + React Router + Tailwind + existing deps only.
- [x] **Build & lint**: Plan keeps `npm run build` and ESLint (`react-app`) as merge gates.
- [x] **Testing**: Spec does not mandate automated tests; acceptance is manual per spec. Optional RTL tests may cover timeline rendering or nav if added later.
- [x] **Accessibility**: Focus/hover states, semantic headings, alt text audit, keyboard nav for new route; Framer Motion respects reduced motion where used.
- [x] **Security**: Timeline is static content; no new secrets; EmailJS and analytics remain public-safe keys only.
- [x] **Deploy target**: Behavior identical on Vercel and `gh-pages` (static build); no host-specific APIs.

### Post–Phase 1 re-check

Design artifacts (`data-model.md`, `contracts/`, `quickstart.md`) align with the above; no constitution violations introduced.

## Project Structure

### Documentation (this feature)

```text
specs/001-ui-refactor-timeline/
├── plan.md              # This file
├── research.md          # Phase 0
├── data-model.md        # Phase 1
├── quickstart.md        # Phase 1
├── contracts/           # Phase 1
└── tasks.md             # Phase 2 (/speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── App.jsx
├── index.css
├── constants/
│   └── index.js          # extend with timelineData (or new timeline.js)
├── Components/
│   ├── Home/
│   ├── About/
│   ├── Projects/
│   ├── Contact/
│   ├── Layout/
│   │   ├── Layout.jsx
│   │   ├── Footer.jsx
│   │   └── navbar/       # NavItems, Navbar, MobileNav — add Experience link
│   ├── Experience/       # NEW: timeline page/section components
│   └── Reuseable/        # shared UI (SecTitle, cards) — refactor for consistency
public/
```

**Structure Decision**: Single CRA app under `src/`. New `Experience` (or similarly named) component folder for the timeline route. Shared design tokens or utility classes live in `index.css` and Tailwind config as needed. Timeline entries live as a static array exported from `constants` (or a dedicated module) to match the spec assumption that the owner supplies data.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations; table not used.
