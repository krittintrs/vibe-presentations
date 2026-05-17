import React from 'react'

const MAPPING = [
  { sdlc: 'Understand Codebase', sdlcSub: 'Phase 2', step: 'Read',   stepSub: 'Gather context' },
  { sdlc: 'Plan',                sdlcSub: 'Phase 3', step: 'Plan',   stepSub: 'Ask before coding' },
  { sdlc: 'Code',                sdlcSub: 'Phase 4', step: 'Do',     stepSub: 'Let AI generate' },
  { sdlc: 'Test',                sdlcSub: 'Phase 5', step: 'Verify', stepSub: 'Review & iterate' },
]

export default function Slide05() {
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
