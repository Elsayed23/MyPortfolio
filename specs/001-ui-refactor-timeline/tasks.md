---
description: "Task list for portfolio UI refactor and work timeline (001-ui-refactor-timeline)"
---

# Tasks: Portfolio UI Refactor and Work Timeline

**Input**: Design documents from `/specs/001-ui-refactor-timeline/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Not required by spec; manual verification per quickstart.md.

**Organization**: Phases follow user-story priority (P1 UI refactor, then P2 timeline).

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies on incomplete tasks in the same wave)
- **[Story]**: [US1] or [US2] for user-story phases only
- Paths are relative to repository root unless noted

## Path Conventions

- CRA app: `src/`, `public/`
- Feature specs: `specs/001-ui-refactor-timeline/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm environment and feature context

- [x] T001 Run `npm install` in repository root and confirm `npm start` runs without errors
- [x] T002 [P] Read acceptance steps in `specs/001-ui-refactor-timeline/quickstart.md` and note Web Vitals baseline approach

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared design tokens and motion behavior before page refactors

**⚠️ CRITICAL**: Complete before User Story 1 and User Story 2 UI work

- [x] T003 Add design tokens (`:root` CSS custom properties) and base typography/body styles in `src/index.css`
- [x] T004 Extend `tailwind.config.js` theme (colors, fontFamily) to align with tokens from T003
- [x] T005 Respect `prefers-reduced-motion` for route/page transitions in `src/Components/Other/TransitionPage.jsx`
- [x] T006 Apply shared layout background and content width/padding using tokens in `src/Components/Layout/Layout.jsx`

**Checkpoint**: Tokens and motion baseline ready — user story implementation can begin

---

## Phase 3: User Story 1 — Consistent, Modern Portfolio UI (Priority: P1)

**Goal**: Cohesive visual language, responsive readability, clear hover/focus on interactive elements across Home, About, Projects, Contact, and shared chrome.

**Independent Test**: Visit Home, About, Projects, Contact; confirm consistent typography/spacing/colors, usable mobile layout, visible focus/hover on links and buttons (per spec US1).

### Implementation for User Story 1

- [x] T007 [P] [US1] Refactor `src/Components/Home/Hero.jsx` to use design tokens, responsive type, and focus-visible styles on links/buttons
- [x] T008 [P] [US1] Refactor `src/Components/Home/WriteAnimation.jsx` to honor reduced motion (skip or simplify animation when preferred)
- [x] T009 [P] [US1] Refactor `src/Components/Home/Features.jsx` for token-based spacing and section layout
- [x] T010 [P] [US1] Refactor `src/Components/Home/FeaturesBox.jsx` for consistent cards and text contrast
- [x] T011 [P] [US1] Refactor `src/Components/Home/Projects.jsx` to match updated card/section patterns
- [x] T012 [US1] Update `src/Components/Home/Home.jsx` only if composition or wrappers are required after child refactors
- [x] T013 [P] [US1] Refactor `src/Components/About/About.jsx` for tokens, chip/link focus styles, and responsive layout
- [x] T014 [P] [US1] Refactor `src/Components/Projects/AllProjects.jsx` for grid spacing and headings consistent with design tokens
- [x] T015 [P] [US1] Refactor `src/Components/Reuseable/ProjectCard.jsx` for consistent card UI and focus states on demo/code links
- [x] T016 [P] [US1] Refactor `src/Components/Contact/Contact.jsx` for form control contrast, focus rings, and responsive layout
- [x] T017 [P] [US1] Refactor `src/Components/NotFound/NotFound.jsx` for typography and link styles aligned with tokens
- [x] T018 [P] [US1] Refactor `src/Components/Layout/navbar/Navbar.jsx` for token colors and navbar link focus visibility
- [x] T019 [P] [US1] Refactor `src/Components/Layout/navbar/NavItems.jsx` for active and focus-visible link styles
- [x] T020 [P] [US1] Refactor `src/Components/Layout/navbar/MobileNav.jsx` and `src/Components/Layout/navbar/MenuToggle.jsx` for keyboard operable menu and visible focus
- [x] T021 [US1] Refactor `src/Components/Layout/Footer.jsx` for token-based text and link styles
- [x] T022 [P] [US1] Refactor `src/Components/Reuseable/SecTitle.jsx` for shared section title styling
- [x] T023 [P] [US1] Refactor `src/Components/Reuseable/SocilaLinks.jsx` for consistent icon link sizing and focus rings
- [x] T024 [US1] Smoke-check `src/App.jsx` routes and `AnimatePresence` usage still match refactored layout behavior

**Checkpoint**: User Story 1 complete — MVP deployable without timeline route

---

## Phase 4: User Story 2 — Work and Career Timeline (Priority: P2)

**Goal**: Dedicated experience/timeline view with structured entries (title, organization, dates, optional description), newest-first, reachable from main nav in one click.

**Independent Test**: Open `#/experience` (HashRouter), verify entries ordered newest-first, required fields visible, optional description omitted safely, readable on mobile (per spec US2).

### Implementation for User Story 2

- [x] T025 [US2] Add `src/constants/timeline.js` exporting `timelineData` sorted newest-first per `specs/001-ui-refactor-timeline/data-model.md` and `specs/001-ui-refactor-timeline/contracts/timeline-entry.schema.json` (placeholder entries acceptable)
- [x] T026 [US2] Create `src/Components/Experience/TimelineList.jsx` to render entries with date range, wrapping text, and single-entry / missing-description edge cases
- [x] T027 [US2] Create `src/Components/Experience/Experience.jsx` with `SEO`, `SecTitle`, and `TimelineList` using tokens from Phase 2
- [x] T028 [US2] Register `experience` route in `src/App.jsx`, import Experience page, and add nav item in `src/constants/index.js` so `src/Components/Layout/navbar/NavItems.jsx` and `src/Components/Layout/navbar/MobileNav.jsx` show the new link

**Checkpoint**: User Stories 1 and 2 both independently testable

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Constitution gates, a11y spot-check, docs

- [x] T029 Run `npm run build` in repository root and fix any build errors
- [x] T030 Run ESLint on `src` (e.g. `npx eslint src --ext .js,.jsx`) and fix issues in touched files
- [x] T031 [P] Audit `alt` text on images under `src/Components/` and decorative images use `alt=""` where appropriate
- [x] T032 Complete manual verification from `specs/001-ui-refactor-timeline/quickstart.md` (including reduced motion and Lighthouse baseline notes for SC-003)
- [x] T033 Update `README.md` if navigation, routes, or run instructions change materially

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)** → **Phase 2 (Foundational)** → **Phase 3 (US1)** → **Phase 4 (US2)** → **Phase 5 (Polish)**  
- US2 should follow US1 so shared components (e.g. `SecTitle`, nav chrome) already match the new design system before adding the Experience route and link.

### User Story Dependencies

- **US1 (P1)**: Starts after Phase 2; no dependency on US2.
- **US2 (P2)**: Starts after Phase 2; practically after US1 so nav/title/tokens are stable (recommended sequence: finish Phase 3 before Phase 4).

### Parallel Opportunities

- After T006: T007–T011 can run in parallel (distinct Home files); T013–T017 parallel (About/Projects/Contact/NotFound/ProjectCard); T018–T020 parallel (navbar files); T022–T023 parallel (reuseable).
- After Phase 2, US1 and US2 could run in parallel by different contributors if nav for US2 is coordinated — default is sequential to avoid merge conflicts in `NavItems.jsx` / `MobileNav.jsx`.

---

## Parallel Example: User Story 1

After T006 completes, launch in parallel:

- Task T007: `src/Components/Home/Hero.jsx`
- Task T008: `src/Components/Home/WriteAnimation.jsx`
- Task T009: `src/Components/Home/Features.jsx`
- Task T010: `src/Components/Home/FeaturesBox.jsx`
- Task T011: `src/Components/Home/Projects.jsx`

Then integrate with T012 (`Home.jsx`) if needed.

---

## Implementation Strategy

### MVP First (User Story 1 only)

1. Complete Phase 1 and Phase 2  
2. Complete Phase 3 (T007–T024)  
3. Run `npm run build` smoke check  
4. Validate US1 manually; ship or demo without timeline  

### Full feature

1. MVP as above  
2. Complete Phase 4 (T025–T028)  
3. Complete Phase 5 (T029–T033)  

---

## Notes

- Re-export `timelineData` from `src/constants/index.js` only if other modules import constants from that barrel; otherwise direct import from `timeline.js` is fine.
- HashRouter URLs use `#/experience` for the new route in local testing.
- Commit after each task or small logical group; stop at Phase 3 checkpoint for MVP review.
