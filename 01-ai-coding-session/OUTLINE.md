# AI Coding Session — Slide Outline

**Audience:** New grads & uni students, healthtech outsource dev team
**Duration:** 1 hour presentation + 1 hour demo + 1 hour Q&A
**Tools in focus:** Claude Code, Codex, Gemini (CLI) · Cursor, Antigravity (IDE)

---

## Section 1: Context Setting

### Slide 0 — Title
- Presentation title + speaker name + date

### Slide 1 — Traditional SDLC
- 8-phase linear flow (left to right)
- Phases: Requirement → Understand codebase → Plan → Code → Test → Pull Request → Review → Deploy (CI/CD)
- Phase name only, minimal text

### Slide 2 — AI-Enhanced SDLC
- Same 8-phase flow
- Phases 2–5 highlighted (AI-friendly): Understand codebase, Plan, Code, Test
- Phases 1, 6–8 visually de-emphasized (require business/deployment context)

---

## Section 2: Workflow Pattern

### Slide 3 — How Much Do You Use AI? (Engagement)
- Interactive check-up scale 0–8
- React component, color gradient gray → purple
- Labels (Thai + English):
  - 0: ไม่ใช้เลย
  - 1: ก้อปโค้ดไปถาม AI
  - 2: ถามตอบกับ AI ใน IDE
  - 3: ให้ AI แก้ format
  - 4: ให้ AI อ่านโค้ด แล้วแก้โค้ดให้
  - 5: โหลด skill / agent / workflow / slash command มาใช้
  - 6: สร้าง skill / agent / workflow / slash command เอง
  - 7: สร้าง AI agent หลายตัว
  - 8: ให้ AI คุม agent อีกที

### Slide 4 — Read → Plan → Do → Verify
- Cycle/loop diagram (not linear)
- Each step: name + one-line example
  - Read: gather context, point AI at the right files
  - Plan: ask for a plan before any code is written
  - Do: let AI generate, stay in the loop
  - Verify: review output, run tests, iterate

### Slide 5 — Pattern Mapped to SDLC
- Two-row layout
- Top row: 4 AI-friendly SDLC phases (Understand codebase → Plan → Code → Test)
- Bottom row: 4 workflow steps (Read → Plan → Do → Verify)
- Arrows connecting each phase to its matching step

---

## Section 3: Tools

### Slide 6 — IDE vs CLI
- Two-column layout
- **IDE** (Cursor, Antigravity)
  - Pros: easy to use, see code inline, browser agent support
  - Cons: UI layer can be buggy, not fully functional vs CLI
  - Tool icons below
- **CLI** (Claude Code, Codex, Gemini)
  - Pros: low-level, can do almost anything
  - Cons: harder for non-terminal users
  - Tool icons below

---

## Section 4: Harness Engineering

### Slide 7 — AI Customization Components
- 2×2 card grid
- Cards: MCP · Skills · Rules · Prompts
- Each card: component name + one-line description

### Slide 8 — Load from Market vs. Build Your Own
- Two-column layout
- **Load from market / GitHub**
  - Browse existing skills, MCP servers, slash commands
  - Examples: (Tin to provide)
- **Custom your own**
  - Work → find repeating pattern → save as skill
  - Your workflow, encoded once, reused everywhere

### Slide 9 — Why It Matters
- Two side-by-side cards
- Card 1: Better results & consistent conventions
  - Rules enforce coding style
  - Skills encode your workflow patterns
  - MCP gives project context
- Card 2: Model-agnostic — your layer, not theirs
  - Swap Claude → Gemini → Codex without rewriting your setup
  - Cost vs. capability tradeoff stays in your control

---

## Section 5: Context Engineering

### Slide 10 — Document System
- Card grid layout
- Doc types:
  - **CLAUDE.md / agent md** — project rules & conventions (from `/init`)
  - **ADR** — architecture decision log, why decisions were made
  - **Plan** — current task context, what you're trying to do
  - **References** — external docs, API specs, design files
- Key message: right docs = better context = better output

---

## Section 6: Recap

### Slide 11 — Agent = Model + Harness + Context
- Big reveal equation diagram
- Model → points back to tools from Slide 6
- Harness → points back to components from Slides 7–9
- Context → points back to doc system from Slide 10
- Everything the audience learned, unified in one formula

---

## Section 7: Bridge

### Slide 12 — Demo Time
- Plain slide
- "Demo Time" — no agenda (flexible based on audience)
