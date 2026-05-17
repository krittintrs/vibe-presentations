function ToolBadge({ name, color }) {
  return (
    <span className="tool-badge" style={{ color, borderColor: color, background: color + '18' }}>
      {name}
    </span>
  )
}

export default function Slide06() {
  return (
    <>
      <h2>Choosing Your Environment</h2>
      <p className="subtitle">Two ways to work with AI — each with its own strengths.</p>
      <div className="cols d2" style={{ gap: 20, marginTop: 24 }}>
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
