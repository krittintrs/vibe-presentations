export default function Slide11() {
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
