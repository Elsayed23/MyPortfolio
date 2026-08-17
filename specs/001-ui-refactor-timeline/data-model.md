# Data Model: Work Timeline

**Feature**: `001-ui-refactor-timeline`  
**Date**: 2026-03-22

## Entity: TimelineEntry

Represents one career or education milestone shown in the work timeline.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Stable unique id for keys and tests (e.g. `exp-2024-acme`). |
| `title` | string | Yes | Role or program title (maps to spec: role/title). |
| `organization` | string | Yes | Employer or institution name. |
| `startDate` | string | Yes | ISO-like month precision recommended: `YYYY-MM` or full ISO date. |
| `endDate` | string \| null | Yes | End date in same format, or `null` / sentinel value for “present”. |
| `description` | string | No | Short responsibilities or achievements; omit or empty string when missing (FR-006, FR-008). |
| `bullets` | string[] | No | Optional list of achievement lines; when present, UI renders as a list instead of `description`. |
| `workplace` | enum | No | Optional tag: `remote` \| `on-site` \| `hybrid`. |
| `type` | enum | No | Optional discriminator: `work` \| `education` \| `other` for icons or section grouping. |

## Validation rules

- `title` and `organization` MUST be non-empty strings when present in the array.
- `startDate` MUST parse consistently for sorting (same format for all entries preferred).
- For sorting (newest first): compute a sort key from `endDate` (present = max date), then `startDate` as tiebreaker.
- Long `description` or `organization`: UI MUST wrap text (no fixed single-line truncation required unless design specifies).

## Relationships

- **TimelineEntry[]**: Ordered collection consumed by the Experience page; no relations to other entities beyond optional grouping by `type`.

## State

- Static read-only data at runtime; no client-side mutations or server persistence in scope for this feature.
