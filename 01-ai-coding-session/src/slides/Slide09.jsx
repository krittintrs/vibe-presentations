import { MatIcon } from './shared'

export default function Slide09() {
  return (
    <>
      <h2>Why Customization Matters</h2>
      <p className="subtitle">The same model behaves completely differently depending on the harness around it.</p>
      <div className="cols d2" style={{ gap: 20, marginTop: 28 }}>
        <div className="card card-aqua" style={{ padding: 28 }}>
          <MatIcon name="target" size="1.8rem" style={{ marginBottom: 12 }} />
          <h3 style={{ marginBottom: 10 }}>Better results & consistent conventions</h3>
          <ul className="pro-con-list" style={{ gap: 8 }}>
            <li className="pro"><span className="icon">→</span> Rules enforce your coding style automatically</li>
            <li className="pro"><span className="icon">→</span> Skills encode your team's workflow patterns</li>
            <li className="pro"><span className="icon">→</span> MCP gives AI full project context every time</li>
            <li className="pro"><span className="icon">→</span> AI maintains your structure — not its own defaults</li>
          </ul>
        </div>
        <div className="card card-aqua" style={{ padding: 28 }}>
          <MatIcon name="sync_alt" size="1.8rem" style={{ marginBottom: 12 }} />
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
