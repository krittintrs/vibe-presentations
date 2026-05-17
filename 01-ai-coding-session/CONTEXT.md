# AI Coding Session Presentation - Planning Recap

## **Event Overview**
- **Audience:** Developer team from healthtech outsource company (mostly new grads & uni students)
- **Duration:** 3 hours total
  - 1 hour: Presentation
  - 1 hour: Live Demo
  - 1 hour: Q&A
- **Location:** Remote/In-person (not specified)

---

## **Audience Context & Questions**

### **Their 4 Proposed Periods:**
1. Walkthrough all tools (สอนการใช้งานเครื่องมือ)
2. Best practice (ขั้นตอนเพื่อให้ใช้งาน AI ได้อย่างมีประสิทธิภาพสูงสุด)
3. Demo + tips and tricks (ทดลองทำจริง + Techniques ต่างๆ)
4. Q&A

### **Their 3 Key Questions:**
1. จากที่ลองมาอยากรู้ว่าโมเดลตัวไหนเหมาะกับงานอะไรบ้าง
   - *Which models are best for different tasks?*
2. สามารถเอา AI มาใช้กับ Project Management ได้อย่างไรบ้าง
   - *How can we use AI for Project Management?*
3. ให้ AI เขียน Code อย่างไรให้สามารถคง Project Structure และ Coding Convention เดิมไว้ได้
   - *How to maintain project structure & coding conventions when using AI?*

### **Their Current Tools:**
- GitHub Copilot
- Claude Code
- Codex

---

## **Tin's Vision & Context**

### **Core Teaching Objectives:**
1. Introduce from **normal SDLC → using AI in all steps**
2. Explain **fundamentals of AI tools:**
   - Harness engineering concept (Agent = Model + Harness)
   - Context management
3. **Key insight:** All AI tools are almost the same (way to use it)
   - Learn once → can use all tools
4. **Audience is new grads/uni students** → need concrete, practical approach

### **Demo Project:**
- Real project: **Expense tracker** (vibe coding with Antigravity Kit + Gemini CLI)
- Will use this to demonstrate the workflow across tools

---

## **Narrative Approach: Workflow-First (Approach B)**

### **Why This Approach:**
✅ Concrete first, abstract second (ideal for new grads)
✅ Leverages Tin's real experience
✅ Demystifies "AI Agent" as a repeatable pattern
✅ Sets up demo perfectly
✅ Makes "all tools are the same" self-evident

### **The Workflow Pattern (Read → Plan → Do → Verify):**
Tin uses the same 4-step workflow with **ALL tools:**
1. **Read code** (context gathering)
2. **Plan** (what to change)
3. **Do** (generate)
4. **Verify** (validate output)

This pattern remains consistent regardless of model choice.

---

## **Presentation Structure (1 Hour)**

### **Segment 1: Context Setting (Traditional SDLC)**
- Show traditional SDLC workflow
- Bridge to "Now we can add AI to all layers"

### **Segment 2: Your Workflow Pattern (Read → Plan → Do → Verify)**
- 10 minutes
- "This is how I use AI tools. Same pattern every time."

### **Segment 3: Model Differences (Claude, Codex, Copilot)**
- 10 minutes
- "Different models, same workflow"

### **Segment 4: Harness Engineering (MCP, Skills, Rules, Prompts)**
- 12 minutes
- "How you optimize the workflow"

### **Segment 5: Recap - This IS an AI Agent**
- 5 minutes
- Tie back to Model + Harness = Agent

### **Segment 6: Bridge to Demo**
- 3 minutes

---

## **Section 1: Traditional SDLC + AI Layers (DETAILED)**

### **SLIDE 1: Traditional SDLC Diagram**

**8 Phases (linear flow):**
1. Requirement (understand biz need)
2. Understand codebase
3. Plan
4. Code
5. Test
6. Pull request
7. Review
8. Deploy (CI/CD)

**Visual format:** Linear flow diagram (left to right)

**Open questions for refinement:**
- Should each box show description text or just phase name + speaker notes?
- Should phases be equally sized or grouped visually?

---

### **SLIDE 2: AI-Enhanced SDLC**

**Same 8-phase flow, but with AI highlights:**

**AI-Friendly Phases (2-5):**
- Phase 2: Understand codebase ✓ AI helps
- Phase 3: Plan ✓ AI helps
- Phase 4: Code ✓ AI helps
- Phase 5: Test ✓ AI helps

**Why these phases?**
- Developers can discuss with AI using their local codebase
- Interactive, iterative process with immediate feedback

**Non-AI-Friendly Phases (1, 6-8):**
- Phase 1: Requirement - requires business background knowledge
- Phase 6-8: Pull request, Review, Deploy - requires deployment context (not local)

**Visual approach TBD:**
- How to highlight phases 2-5? (color, icon, glow effect?)
- Show phases 1, 6-8 grayed out or neutral?
- Single diagram with highlights or before/after comparison?

---

## **Next Steps**

### **Immediate:**
1. Finalize Slide 1 & 2 visuals with Claude Code
2. Discuss Section 2: Workflow Pattern slides (Read → Plan → Do → Verify)
   - Conceptual diagram + how many example slides?
   - Use expense tracker examples?

### **Later (as indicated by Tin):**
3. Section 3: Model Differences (Claude, Codex, Copilot) - discuss slide count & format
4. Section 4: Harness Engineering (MCP, Skills, Rules, Prompts) - discuss breakdown

### **Demo Hour Details:**
- Real feature: "Categorize expenses by AI" (or smaller scope?)
- ~15 min per tool (Claude Code, Cursor, GitHub Copilot)
- Show context management, iterative refinement, techniques

### **Q&A Hour:**
- Their 3 questions will emerge naturally through demo
- Open Q&A after

---

## **Design Philosophy for Slides**
- **Minimal text + strong visuals**
- One idea per slide
- Speaker notes for detailed explanation
- Concrete examples from real projects (expense tracker)
- Diagrams over prose

---

## **Tools & Technologies Mentioned**
- **AI Models:** Claude, Codex, GitHub Copilot
- **Frameworks:** MCP, Skills, Rules (harness engineering)
- **Project:** Expense tracker (Antigravity Kit + Gemini CLI)
- **Presentation tool:** Claude Code (for slide development)

---

**Status:** Section 1 (SDLC diagrams) ready for Claude Code implementation. Awaiting refinement questions answered, then moving to Section 2.
