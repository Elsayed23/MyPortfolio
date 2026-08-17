<!--
Sync Impact Report
Version change: (unversioned template) → 1.0.0
Modified principles: N/A (initial adoption; placeholders replaced)
Added sections: Technology & Deployment Constraints; Development Workflow & Specs
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ updated (Constitution Check gates)
  - .specify/templates/spec-template.md ✅ updated (constitution alignment note)
  - .specify/templates/tasks-template.md ✅ updated (portfolio polish / paths)
  - .cursor/commands/*.md ✅ verified (no agent-specific stale refs)
Follow-up TODOs: None
-->

# Portfolio Constitution

## Core Principles

### I. Stack fidelity

New feature work MUST run on the repository’s established stack unless an
implementation plan explicitly documents a migration and supersedes this rule.
Today that stack is: React 18, Create React App (`react-scripts`), React Router,
Tailwind CSS, and existing UI libraries already in `package.json`. Adding or
replacing major frameworks or build tools MUST be justified in `plan.md` under
Complexity Tracking with a concrete migration path.

**Rationale:** Keeps the portfolio maintainable and avoids unbounded toolchain
sprawl on a single-developer site.

### II. Build and lint quality gates

A change-set is not complete for merge or release until `npm run build` completes
successfully with no errors. Project ESLint configuration (`react-app` /
`react-app/jest`) MUST NOT be disabled or bypassed to hide violations; fixes or
narrow, documented exceptions are required instead.

**Rationale:** Production builds and CI-style checks catch broken imports and
regressions early.

### III. Testing when specified

When a feature specification marks tests as required, tests MUST use Jest and
React Testing Library (already in dependencies). New user-visible behavior MUST
have at least one test that fails before implementation and passes after, for
the flows the spec calls out. If the spec explicitly omits tests, implementation
MAY skip new test files but MUST still satisfy manual acceptance scenarios in
the spec.

**Rationale:** Matches the project’s tooling while keeping optional tests
unless stakeholders ask for them.

### IV. Accessible, respectful UX

Interactive controls MUST be keyboard operable where applicable. Images MUST have
appropriate `alt` text (or `alt=""` when decorative). Adding or changing motion
MUST respect `prefers-reduced-motion` when the motion is non-essential. Layout
and contrast MUST not knowingly regress WCAG 2.1 AA for primary content paths
without documentation and remediation in the plan.

**Rationale:** A public portfolio must be usable by the widest audience and
reflect professional quality.

### V. Security, privacy, and secrets

Secrets and private API keys MUST NOT be committed. Client-exposed configuration
(e.g. EmailJS public keys, analytics IDs) MUST be limited to values safe for
public browsers. Dependencies with known high-severity vulnerabilities SHOULD be
updated or replaced when a practical fix exists; if not, the risk MUST be noted
in the feature plan.

**Rationale:** Reduces credential leakage and obvious supply-chain risk.

## Technology & Deployment Constraints

- Source lives under `src/` (e.g. `App.jsx`, `Components/`). Public static assets
  use Create React App conventions (`public/`).
- Primary live deployment aligns with the README (Vercel). The `gh-pages` script
  remains an alternate publish path; feature plans MUST state which target they
  affect when behavior differs between hosts.
- Environment-specific values MUST be loaded via CRA environment variables
  (`REACT_APP_*`) or other documented, non-secret mechanisms—never hard-coded
  secrets.

## Development Workflow & Specs

- Substantive features use Speckit artifacts: `spec.md`, `plan.md`, and `tasks.md`
  under `specs/[###-feature-name]/` per command workflows.
- Specifications MUST express independently testable user stories and measurable
  success criteria; implementation plans MUST record a Constitution Check
  result before Phase 0 research and re-check after Phase 1 design.
- `README.md` is the human-facing project overview; material changes to setup,
  scripts, or deploy targets SHOULD be reflected there when they affect
  contributors or deployment.

## Governance

This constitution supersedes ad-hoc practices when they conflict. Amendments MUST
be made by editing `.specify/memory/constitution.md`, incrementing
**Version** according to semantic versioning for governance text: MAJOR for
incompatible removals or redefinitions of principles; MINOR for new principles
or materially expanded guidance; PATCH for clarifications and non-normative
wording. Each amendment MUST update **Last Amended** to the amendment date
(ISO `YYYY-MM-DD`).

Pull requests and reviews MUST verify compliance with applicable MUST-level
rules (build, secrets, stack fidelity for the touched areas). Justified
violations MUST be listed in `plan.md` under **Complexity Tracking** with
alternatives considered.

For day-to-day coding conventions beyond this document, follow existing code
style in the repository and `README.md`.

**Version**: 1.0.0 | **Ratified**: 2026-03-22 | **Last Amended**: 2026-03-22
