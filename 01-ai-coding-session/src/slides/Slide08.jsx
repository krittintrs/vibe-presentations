export default function Slide08() {
  return (
    <>
      <h2>Load It or Build It</h2>
      <p className="subtitle">You don't have to start from scratch — but building your own is where the real power is.</p>
      <div className="cols d2" style={{ gap: 20, marginTop: 24 }}>
        <div className="card" style={{ borderTop: '3px solid var(--border)' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 10 }}>
            Load from Community
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--dark)', marginBottom: 12 }}>
            Browse skills, MCP servers, and workflows built by others.
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
