import { MatIcon } from './shared'

const DOC_TYPES = [
  { icon: 'description',  name: 'CLAUDE.md',   label: 'Agent Rules',                  desc: 'Project conventions, coding style, and instructions that AI follows every session. Generated with /init.' },
  { icon: 'account_tree', name: 'ADR',          label: 'Architecture Decision Records', desc: 'Why decisions were made — tech choices, tradeoffs, rejected options. Prevents AI from second-guessing them.' },
  { icon: 'map',          name: 'Plan',         label: 'Task Context',                 desc: "What you're trying to build right now. Gives AI a clear goal and prevents scope drift mid-task." },
  { icon: 'menu_book',    name: 'References',   label: 'External Docs & Specs',        desc: "API docs, design files, PRDs, and specs. Feed the right background so AI doesn't hallucinate details." },
]

export default function Slide10() {
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
            <MatIcon name={d.icon} className="hcard-icon" />
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
