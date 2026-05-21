import anthropicIcon from '@assets/anthropic.svg'
import geminiIcon from '@assets/googlegemini.svg'
import cursorIcon from '@assets/cursor.svg'
import codexIcon from '@assets/codex-color.png'
import antigravityIcon from '@assets/antigravity.jpeg'

function ToolBadge({ name, color, icon }) {
  return (
    <span className="tool-badge" style={{
      color,
      borderColor: color,
      background: color + '18',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
    }}>
      {icon && (
        <img
          src={icon}
          alt=""
          style={{ width: 14, height: 14, objectFit: 'contain', borderRadius: 2 }}
        />
      )}
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
            <ToolBadge name="Cursor" color="#7c3aed" icon={cursorIcon} />
            <ToolBadge name="Antigravity" color="#7c3aed" icon={antigravityIcon} />
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
            <ToolBadge name="Claude Code" color="#0cc0df" icon={anthropicIcon} />
            <ToolBadge name="Codex" color="#0cc0df" icon={codexIcon} />
            <ToolBadge name="Gemini CLI" color="#0cc0df" icon={geminiIcon} />
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
