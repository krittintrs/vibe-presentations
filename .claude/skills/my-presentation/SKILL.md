---
name: my-presentation
description: Scaffolds Tin's personal-branded React + Vite slide decks — keyboard-navigable, single-file HTML output. Each slide is its own file so edits never break others. Use when creating a new presentation, adding slides, or fixing individual slides in the presentations repo.
---

# My Presentation Builder

## Quick Start

```
presentations/
  asset/               ← shared icons & logos (all presentations)
  NN-topic-name/       ← new presentation folder
    CONTEXT.md         ← audience, goals, narrative
    OUTLINE.md         ← slide-by-slide plan
    src/slides/        ← one file per slide
```

## Workflow

### Step 1 — Gather requirements
Ask about: topic, audience, slide count per section, narrative arc, any real data/metrics.

### Step 2 — Plan before building
Write `CONTEXT.md` (audience + goals) and `OUTLINE.md` (slide table with content spec).
Commit both before touching any code.

### Step 3 — Scaffold the project
Copy the boilerplate from `${CLAUDE_SKILL_ROOT}/references/design-system.md`.

**Critical:** always use the vite.config.js from `${CLAUDE_SKILL_ROOT}/references/design-system.md` — it includes the `@assets` alias and `server.fs.allow` needed for the global asset/ folder.

After scaffolding: `npm install && npm run dev`

### Step 4 — Build slides section by section
One message per section (3–5 slides). Never build all slides at once.

**Slide file rules:**
- One file per slide: `Slide00.jsx`, `Slide01.jsx`, …
- Shared components only in `shared.jsx` (MatIcon, profileImg, reusable diagrams)
- `index.js` exports the ordered array — the only place slide order is set
- Editing one slide file must not require touching any other file

### Step 5 — Build
`npm run build` → `dist/index.html` (single self-contained file, all assets inlined)

## Data Rule
**Never fabricate data.** Qualitative content → cards, lists, tables. Charts only when real numbers exist.

## Branding
See `${CLAUDE_SKILL_ROOT}/references/branding.md` for colors, typography, and CSS variables.

## Component Patterns
See `${CLAUDE_SKILL_ROOT}/references/slide-patterns.md` for ready-to-use JSX patterns:
SDLCFlow · CycleGrid · TwoRow · ScaleWrap · EquationReveal · ToolBadge

## Tool Icons
Import via `@assets/` alias:
- `anthropic.svg` → Claude Code
- `googlegemini.svg` → Gemini CLI
- `cursor.svg` → Cursor
- `codex-color.png` → Codex
- `antigravity.jpeg` → Antigravity
