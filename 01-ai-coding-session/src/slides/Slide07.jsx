import { MatIcon } from './shared'

const COMPONENTS = [
  { icon: 'hub',    name: 'MCP',     fullName: 'Model Context Protocol',   desc: 'Connect AI to external tools, APIs, and data sources — filesystem, browser, databases, and more.' },
  { icon: 'bolt',   name: 'Skills',  fullName: 'Slash Commands & Workflows', desc: 'Reusable routines you trigger with a command — code review, PR summary, test generation.' },
  { icon: 'policy', name: 'Rules',   fullName: 'CLAUDE.md / Agent Rules',  desc: 'Coding conventions, project constraints, and team standards — AI follows them automatically.' },
  { icon: 'chat',   name: 'Prompts', fullName: 'System Instructions',      desc: 'Custom personality and behavior — how it responds, what it prioritizes, what to avoid.' },
]

export default function Slide07() {
  return (
    <>
      <h2>AI Customization</h2>
      <p className="subtitle">Four levers you can tune to shape how AI works with your project.</p>
      <div className="cards d2" style={{ marginTop: 24 }}>
        {COMPONENTS.map((c) => (
          <div key={c.name} className="card card-aqua">
            <MatIcon name={c.icon} className="hcard-icon" />
            <div className="hcard-name">
              {c.name}{' '}
              <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--muted)' }}>— {c.fullName}</span>
            </div>
            <div className="hcard-desc">{c.desc}</div>
          </div>
        ))}
      </div>
    </>
  )
}
