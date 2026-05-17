import React from 'react'
import profileImg from '../assets/profile.jpeg'

export { profileImg }

export function MatIcon({ name, size = '1.6rem', color = 'var(--aqua)', style = {} }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: size, color, display: 'block', lineHeight: 1, marginBottom: 10, ...style }}
    >
      {name}
    </span>
  )
}

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

export function SDLCFlow({ highlightPhases = [], dimPhases = [] }) {
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
