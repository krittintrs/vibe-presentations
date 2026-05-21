import React from 'react'
import profileImg from '@assets/profile.jpeg'

// ─── Shared: SDLC Flow ────────────────────────────────────────────────────────
const PHASES = [
  { num: 1, name: 'Requirement' },
  { num: 2, name: 'Understand Codebase' },
  { num: 3, name: 'Plan' },
  { num: 4, name: 'Code' },
  { num: 5, name: 'Test' },
  { num: 6, name: 'Pull Request' },
  { num: 7, name: 'Review' },
  { num: 8, name: 'Deploy (CI/CD)' },
]

function SDLCFlow({ highlightPhases = [], dimPhases = [] }) {
  return (
    <div className="sdlc-flow">
      {PHASES.map((phase, i) => (
        <React.Fragment key={phase.num}>
          <div className={[
            'sdlc-phase',
            highlightPhases.includes(phase.num) ? 'highlighted' : '',
            dimPhases.includes(phase.num) ? 'dimmed' : '',
          ].filter(Boolean).join(' ')}>
            <div className="phase-num">{phase.num}</div>
            <div className="phase-name">{phase.name}</div>
          </div>
          {i < PHASES.length - 1 && <span className="sdlc-arrow">›</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

// ─── Slide 0: Title ───────────────────────────────────────────────────────────
function Slide0() {
  return (
    <>
      <img
        src={profileImg}
        alt=""
        style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, display: 'block' }}
      />
      <h1>Coding with AI 101:<br />From Tools to Agents</h1>
      <p className="subtitle" style={{ marginTop: 16 }}>
        Workflow · Models · Harness · Context<br />
        A practical guide for developer teams
      </p>
      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 40 }}>
        Krittin Thirasak (Tin) &nbsp;·&nbsp; 2026
      </p>
    </>
  )
}

// ─── Slide 1: Traditional SDLC ────────────────────────────────────────────────
function Slide1() {
  return (
    <>
      <h2>Traditional SDLC</h2>
      <p className="subtitle">The standard software development lifecycle — 8 phases from idea to production.</p>
      <SDLCFlow />
    </>
  )
}

// ─── Slide 2: AI-Enhanced SDLC ────────────────────────────────────────────────
function Slide2() {
  return (
    <>
      <h2>Where AI Fits In</h2>
      <p className="subtitle">AI works best where your codebase is local and the loop is iterative.</p>
      <SDLCFlow highlightPhases={[2, 3, 4, 5]} dimPhases={[1, 6, 7, 8]} />
      <div className="sdlc-legend d3">
        <div className="sdlc-legend-item">
          <div className="sdlc-legend-dot" style={{ background: 'var(--aqua)' }} />
          AI can help — local codebase, iterative feedback
        </div>
        <div className="sdlc-legend-item">
          <div className="sdlc-legend-dot" style={{ background: 'var(--border)' }} />
          Requires external context — business knowledge or deployment access
        </div>
      </div>
    </>
  )
}

// ─── Slide 3: AI Usage Scale ──────────────────────────────────────────────────
const SCALE_ITEMS = [
  { num: 0, th: 'ไม่ใช้เลย', en: 'Not using AI at all' },
  { num: 1, th: 'ก้อปโค้ดไปถาม AI', en: 'Copy-paste code into ChatGPT / Claude' },
  { num: 2, th: 'ถามตอบกับ AI ใน IDE', en: 'Chat with AI inside your editor' },
  { num: 3, th: 'ให้ AI แก้ format', en: 'AI reformats / cleans up code' },
  { num: 4, th: 'ให้ AI อ่านโค้ด แล้วแก้โค้ดให้', en: 'AI reads context and edits code directly' },
  { num: 5, th: 'โหลด skill / agent / workflow มาใช้', en: 'Load skills, agents, slash commands from the community' },
  { num: 6, th: 'สร้าง skill / agent / workflow เอง', en: 'Build your own skills and workflows' },
  { num: 7, th: 'สร้าง AI agent หลายตัว', en: 'Orchestrate multiple AI agents' },
  { num: 8, th: 'ให้ AI คุม agent อีกที', en: 'AI manages other agents autonomously' },
]

function scaleColor(num) {
  const t = num / 8
  const alpha = 0.18 + t * 0.82
  return {
    borderColor: `rgba(12, 192, 223, ${alpha})`,
    background: `rgba(12, 192, 223, ${alpha * 0.12})`,
    levelColor: num >= 4 ? 'var(--aqua)' : 'var(--muted)',
  }
}

function Slide3() {
  return (
    <>
      <h2>How Much Are You Using AI?</h2>
      <p className="subtitle">ตอนนี้คุณอยู่ระดับไหน — raise your hand when I pass your level</p>
      <div className="scale-wrap d2">
        {SCALE_ITEMS.map(({ num, th, en }) => {
          const { borderColor, background, levelColor } = scaleColor(num)
          return (
            <div key={num} className="scale-row" style={{ borderColor, background }}>
              <span className="scale-level" style={{ color: levelColor }}>{num}</span>
              <div className="scale-text">
                <div className="scale-th">{th}</div>
                <div className="scale-en">{en}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

// ─── Slide 4: Read → Plan → Do → Verify ──────────────────────────────────────
const CYCLE_STEPS = [
  { num: 1, name: 'Read',   example: 'Gather context — point AI at the right files and background' },
  { num: 2, name: 'Plan',   example: 'Ask for a plan before any code is written' },
  { num: 3, name: 'Do',     example: "Let AI generate — stay in the loop, guide it" },
  { num: 4, name: 'Verify', example: "Review output, run tests, iterate until it's right" },
]

function CycleStep({ step }) {
  return (
    <div className="cycle-step">
      <div className="cycle-step-num">Step {step.num}</div>
      <div className="cycle-step-name">{step.name}</div>
      <div className="cycle-step-example">{step.example}</div>
    </div>
  )
}

function Slide4() {
  const [tl, tr, br, bl] = CYCLE_STEPS
  return (
    <>
      <h2>The Workflow Pattern</h2>
      <p className="subtitle">Same 4 steps with every tool, every task — learn once, apply everywhere.</p>
      <div className="cycle-grid d2">
        <CycleStep step={tl} />
        <div className="cycle-arrow-h">→</div>
        <CycleStep step={tr} />
        <div className="cycle-arrow-v">↑</div>
        <div className="cycle-center" />
        <div className="cycle-arrow-v">↓</div>
        <CycleStep step={bl} />
        <div className="cycle-arrow-h">←</div>
        <CycleStep step={br} />
      </div>
    </>
  )
}

// ─── Slide 5: Pattern mapped to SDLC ─────────────────────────────────────────
const MAPPING = [
  { sdlc: 'Understand Codebase', sdlcSub: 'Phase 2', step: 'Read',   stepSub: 'Gather context' },
  { sdlc: 'Plan',                sdlcSub: 'Phase 3', step: 'Plan',   stepSub: 'Ask before coding' },
  { sdlc: 'Code',                sdlcSub: 'Phase 4', step: 'Do',     stepSub: 'Let AI generate' },
  { sdlc: 'Test',                sdlcSub: 'Phase 5', step: 'Verify', stepSub: 'Review & iterate' },
]

function Slide5() {
  return (
    <>
      <h2>Pattern Meets SDLC</h2>
      <p className="subtitle">The 4-step workflow maps directly onto the AI-friendly SDLC phases.</p>
      <div className="two-row d2">
        <div className="two-row-track">
          {MAPPING.map((m, i) => (
            <React.Fragment key={m.sdlc}>
              <div className="map-phase sdlc">
                <div className="phase-label">{m.sdlcSub}</div>
                <div className="phase-title">{m.sdlc}</div>
              </div>
              {i < MAPPING.length - 1 && <span className="map-arrow">›</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="two-row-connectors">
          {MAPPING.map((m, i) => (
            <React.Fragment key={m.step}>
              <div className="connector-col">↓</div>
              {i < MAPPING.length - 1 && <div className="connector-spacer" />}
            </React.Fragment>
          ))}
        </div>
        <div className="two-row-track">
          {MAPPING.map((m, i) => (
            <React.Fragment key={m.step}>
              <div className="map-phase workflow">
                <div className="phase-label">Workflow</div>
                <div className="phase-title">{m.step}</div>
                <div className="phase-sub">{m.stepSub}</div>
              </div>
              {i < MAPPING.length - 1 && <span className="map-arrow aqua">›</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

// ─── Slide 6: IDE vs CLI ──────────────────────────────────────────────────────
function ToolBadge({ name, color }) {
  return (
    <span className="tool-badge" style={{
      color,
      borderColor: color,
      background: color + '18',
    }}>
      {name}
    </span>
  )
}

function Slide6() {
  return (
    <>
      <h2>Choosing Your Environment</h2>
      <p className="subtitle">Two ways to work with AI — each with its own strengths.</p>
      <div className="cols d2" style={{ gap: 20, marginTop: 24 }}>
        {/* IDE */}
        <div className="card" style={{ borderTop: '3px solid #7c3aed' }}>
          <div className="card-section ide">IDE — In-Editor</div>
          <div className="tool-badges">
            <ToolBadge name="Cursor" color="#7c3aed" />
            <ToolBadge name="Antigravity" color="#7c3aed" />
          </div>
          <ul className="pro-con-list">
            <li className="pro"><span className="icon">✓</span> Easy to use — no terminal required</li>
            <li className="pro"><span className="icon">✓</span> See code changes inline as they happen</li>
            <li className="pro"><span className="icon">✓</span> Browser agent support built in</li>
            <li className="con" style={{ marginTop: 8 }}><span className="icon">✗</span> UI layer can be buggy (esp. Antigravity)</li>
            <li className="con"><span className="icon">✗</span> Less control than CLI — some features missing</li>
          </ul>
        </div>

        {/* CLI */}
        <div className="card" style={{ borderTop: '3px solid var(--aqua)' }}>
          <div className="card-section cli">CLI — Terminal</div>
          <div className="tool-badges">
            <ToolBadge name="Claude Code" color="#0cc0df" />
            <ToolBadge name="Codex" color="#0cc0df" />
            <ToolBadge name="Gemini CLI" color="#0cc0df" />
          </div>
          <ul className="pro-con-list">
            <li className="pro"><span className="icon">✓</span> Low-level access — can do almost anything</li>
            <li className="pro"><span className="icon">✓</span> Full-featured: hooks, skills, MCP servers</li>
            <li className="pro"><span className="icon">✓</span> Scriptable and automatable</li>
            <li className="con" style={{ marginTop: 8 }}><span className="icon">✗</span> Requires comfort with the terminal</li>
            <li className="con"><span className="icon">✗</span> Steeper learning curve to set up</li>
          </ul>
        </div>
      </div>
    </>
  )
}

// ─── Slide 7: AI Customization Components ────────────────────────────────────
const HARNESS_COMPONENTS = [
  {
    icon: '🔌',
    name: 'MCP',
    fullName: 'Model Context Protocol',
    desc: 'Connect AI to external tools, APIs, and data sources — filesystem, browser, databases, and more.',
  },
  {
    icon: '⚡',
    name: 'Skills',
    fullName: 'Slash Commands & Workflows',
    desc: 'Reusable routines you can trigger with a command — code review, PR summary, test generation.',
  },
  {
    icon: '📋',
    name: 'Rules',
    fullName: 'CLAUDE.md / Agent Rules',
    desc: 'Coding conventions, project constraints, and team standards baked in — AI follows them automatically.',
  },
  {
    icon: '💬',
    name: 'Prompts',
    fullName: 'System Instructions',
    desc: 'Custom personality and behavior for your AI — how it responds, what it prioritizes, what to avoid.',
  },
]

function Slide7() {
  return (
    <>
      <h2>AI Customization</h2>
      <p className="subtitle">Four levers you can tune to shape how AI works with your project.</p>
      <div className="cards d2" style={{ marginTop: 24 }}>
        {HARNESS_COMPONENTS.map((c) => (
          <div key={c.name} className="card card-aqua">
            <div className="hcard-icon">{c.icon}</div>
            <div className="hcard-name">{c.name} <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--muted)' }}>— {c.fullName}</span></div>
            <div className="hcard-desc">{c.desc}</div>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Slide 8: Load from Market vs Build Your Own ──────────────────────────────
function Slide8() {
  return (
    <>
      <h2>Load It or Build It</h2>
      <p className="subtitle">You don't have to start from scratch — but building your own is where the real power is.</p>
      <div className="cols d2" style={{ gap: 20, marginTop: 24 }}>
        {/* Load */}
        <div className="card" style={{ borderTop: '3px solid var(--border)' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 }}>
            Load from Community
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--dark)', marginBottom: 12 }}>
            Browse skills, MCP servers, and workflows built by the community.
          </p>
          <ul className="pro-con-list">
            <li className="pro"><span className="icon">→</span> MCP servers: filesystem, browser, Notion, Linear</li>
            <li className="pro"><span className="icon">→</span> Skills: /review, /commit, /test, /diagnose</li>
            <li className="pro"><span className="icon">→</span> Agent workflows: PR review bots, deploy helpers</li>
          </ul>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 14 }}>
            GitHub, claude.ai marketplace, community repos
          </p>
        </div>

        {/* Build */}
        <div className="card" style={{ borderTop: '3px solid var(--aqua)' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--aqua)', marginBottom: 10 }}>
            Build Your Own
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--dark)', marginBottom: 12 }}>
            Work → notice a pattern → save it as a skill.
          </p>
          <ul className="pro-con-list">
            <li className="pro"><span className="icon">→</span> Do something manually a few times</li>
            <li className="pro"><span className="icon">→</span> Recognize the repeating pattern</li>
            <li className="pro"><span className="icon">→</span> Encode it as a skill or rule</li>
            <li className="pro"><span className="icon">→</span> Reuse it everywhere — forever</li>
          </ul>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 14 }}>
            Your workflow, encoded once, multiplied infinitely
          </p>
        </div>
      </div>
    </>
  )
}

// ─── Slide 9: Why It Matters ──────────────────────────────────────────────────
function Slide9() {
  return (
    <>
      <h2>Why Customization Matters</h2>
      <p className="subtitle">The same model behaves completely differently depending on the harness around it.</p>
      <div className="cols d2" style={{ gap: 20, marginTop: 28 }}>
        {/* Card 1 */}
        <div className="card card-aqua" style={{ padding: 28 }}>
          <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>🎯</div>
          <h3 style={{ marginBottom: 10 }}>Better results & consistent conventions</h3>
          <ul className="pro-con-list" style={{ gap: 8 }}>
            <li className="pro"><span className="icon">→</span> Rules enforce your coding style automatically</li>
            <li className="pro"><span className="icon">→</span> Skills encode your team's workflow patterns</li>
            <li className="pro"><span className="icon">→</span> MCP gives AI full project context every time</li>
            <li className="pro"><span className="icon">→</span> AI maintains your structure — not its own defaults</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="card card-aqua" style={{ padding: 28 }}>
          <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>🔄</div>
          <h3 style={{ marginBottom: 10 }}>Your layer — not tied to any model</h3>
          <ul className="pro-con-list" style={{ gap: 8 }}>
            <li className="pro"><span className="icon">→</span> Swap Claude → Gemini → Codex, same setup</li>
            <li className="pro"><span className="icon">→</span> Choose by cost, speed, or capability per task</li>
            <li className="pro"><span className="icon">→</span> Models evolve — your harness stays stable</li>
            <li className="pro"><span className="icon">→</span> You own the workflow, not the vendor</li>
          </ul>
        </div>
      </div>
    </>
  )
}

// ─── Slide 10: Document System ───────────────────────────────────────────────
const DOC_TYPES = [
  {
    icon: '📄',
    name: 'CLAUDE.md',
    label: 'Agent Rules',
    desc: 'Project conventions, coding style, and instructions that AI follows automatically every session. Generated with /init.',
  },
  {
    icon: '📐',
    name: 'ADR',
    label: 'Architecture Decision Records',
    desc: 'Why decisions were made — tech choices, tradeoffs, rejected options. Prevents AI from second-guessing them.',
  },
  {
    icon: '🗺️',
    name: 'Plan',
    label: 'Task Context',
    desc: 'What you\'re trying to build right now. Gives AI a clear goal and prevents scope drift mid-task.',
  },
  {
    icon: '📚',
    name: 'References',
    label: 'External Docs & Specs',
    desc: 'API docs, design files, PRDs, and specs. Feed the right background so AI doesn\'t hallucinate details.',
  },
]

function Slide10() {
  return (
    <>
      <h2>Context Engineering</h2>
      <p className="subtitle">
        The right documents = better context = better output.<br />
        AI is only as good as what you give it to read.
      </p>
      <div className="cards d2" style={{ marginTop: 24 }}>
        {DOC_TYPES.map((d) => (
          <div key={d.name} className="card">
            <div className="hcard-icon">{d.icon}</div>
            <div className="hcard-name">
              {d.name}{' '}
              <span style={{ fontSize: '0.72rem', fontWeight: 400, color: 'var(--muted)' }}>— {d.label}</span>
            </div>
            <div className="hcard-desc">{d.desc}</div>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Slide 11: Agent = Model + Harness + Context ──────────────────────────────
function Slide11() {
  return (
    <>
      <h2>Putting It All Together</h2>
      <p className="subtitle">Everything we covered is part of one equation.</p>

      <div className="equation-hero d2">
        <span>Agent</span> = Model + Harness + Context
      </div>

      <div className="equation-cards d3">
        <div className="eq-card">
          <div className="eq-card-label">Model</div>
          <div className="eq-card-title">The Brain</div>
          <ul className="eq-card-items">
            <li>Claude Code</li>
            <li>Codex</li>
            <li>Gemini CLI</li>
            <li>Cursor / Antigravity</li>
          </ul>
        </div>

        <div className="eq-card">
          <div className="eq-card-label">Harness</div>
          <div className="eq-card-title">The System</div>
          <ul className="eq-card-items">
            <li>MCP — tools & connections</li>
            <li>Skills — reusable workflows</li>
            <li>Rules — conventions</li>
            <li>Prompts — behavior</li>
          </ul>
        </div>

        <div className="eq-card">
          <div className="eq-card-label">Context</div>
          <div className="eq-card-title">The Knowledge</div>
          <ul className="eq-card-items">
            <li>CLAUDE.md — project rules</li>
            <li>ADR — decisions made</li>
            <li>Plan — current goal</li>
            <li>References — docs & specs</li>
          </ul>
        </div>
      </div>
    </>
  )
}

// ─── Slide 12: Demo Time ──────────────────────────────────────────────────────
function Slide12() {
  return (
    <div className="demo-wrap">
      <div className="demo-title d1">
        Demo<br /><span>Time.</span>
      </div>
      <p className="subtitle d2" style={{ marginTop: 8 }}>
        Let's see it in action.
      </p>
    </div>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────
export const slides = [Slide0, Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12]
