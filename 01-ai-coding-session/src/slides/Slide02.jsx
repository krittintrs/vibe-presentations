import { SDLCFlow } from './shared'

export default function Slide02() {
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
