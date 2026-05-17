# Reusable Slide Component Patterns

## ToolBadge — icon + name pill
```jsx
function ToolBadge({ name, color, icon }) {
  return (
    <span className="tool-badge" style={{
      color, borderColor: color, background: color + '18',
      display: 'inline-flex', alignItems: 'center', gap: 5,
    }}>
      {icon && <img src={icon} alt="" style={{ width: 14, height: 14, objectFit: 'contain', borderRadius: 2 }} />}
      {name}
    </span>
  )
}
// CSS needed:
// .tool-badges { display: flex; flex-wrap: wrap; gap: 6px; margin: 12px 0 16px; }
// .tool-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; border: 1.5px solid; }
```

## SDLCFlow — 8-phase linear flow diagram
```jsx
// Put in shared.jsx
const PHASES = [
  { num: 1, name: 'Requirement' }, { num: 2, name: 'Understand Codebase' },
  { num: 3, name: 'Plan' }, { num: 4, name: 'Code' }, { num: 5, name: 'Test' },
  { num: 6, name: 'Pull Request' }, { num: 7, name: 'Review' }, { num: 8, name: 'Deploy (CI/CD)' },
]

export function SDLCFlow({ highlightPhases = [], dimPhases = [] }) {
  return (
    <div className="sdlc-flow">
      {PHASES.map((phase, i) => (
        <React.Fragment key={phase.num}>
          <div className={['sdlc-phase', highlightPhases.includes(phase.num) ? 'highlighted' : '', dimPhases.includes(phase.num) ? 'dimmed' : ''].filter(Boolean).join(' ')}>
            <div className="phase-num">{phase.num}</div>
            <div className="phase-name">{phase.name}</div>
          </div>
          {i < PHASES.length - 1 && <span className="sdlc-arrow">›</span>}
        </React.Fragment>
      ))}
    </div>
  )
}
// Usage: <SDLCFlow /> or <SDLCFlow highlightPhases={[2,3,4,5]} dimPhases={[1,6,7,8]} />
// CSS: .sdlc-flow { display:flex; align-items:stretch; }
// .sdlc-phase { flex:1; border:1.5px solid var(--border); border-radius:8px; padding:12px 6px; text-align:center; }
// .sdlc-phase.highlighted { border-color:var(--aqua); background:var(--aqua-bg); }
// .sdlc-phase.dimmed { opacity:0.22; }
// .sdlc-arrow { flex-shrink:0; display:flex; align-items:center; padding:0 4px; color:var(--border); }
```

## CycleGrid — Read→Plan→Do→Verify loop
```jsx
// 3x3 grid layout: [TL] [→] [TR] / [↑] [] [↓] / [BL] [←] [BR]
function CycleStep({ step }) {
  return (
    <div className="cycle-step">
      <div className="cycle-step-num">Step {step.num}</div>
      <div className="cycle-step-name">{step.name}</div>
      <div className="cycle-step-example">{step.example}</div>
    </div>
  )
}
// Usage in slide:
// <div className="cycle-grid">
//   <CycleStep step={tl} /><div className="cycle-arrow-h">→</div><CycleStep step={tr} />
//   <div className="cycle-arrow-v">↑</div><div className="cycle-center" /><div className="cycle-arrow-v">↓</div>
//   <CycleStep step={bl} /><div className="cycle-arrow-h">←</div><CycleStep step={br} />
// </div>
// CSS: .cycle-grid { display:grid; grid-template-columns:1fr 48px 1fr; grid-template-rows:auto 48px auto; max-width:680px; }
// .cycle-step { border:2px solid var(--aqua); border-radius:10px; padding:18px 20px; background:var(--aqua-bg); }
// .cycle-arrow-h,.cycle-arrow-v { display:flex; align-items:center; justify-content:center; font-size:1.4rem; color:var(--aqua); }
```

## TwoRow — two aligned rows with connectors (e.g. SDLC → Workflow mapping)
```jsx
// Usage:
// <div className="two-row">
//   <div className="two-row-track">
//     {items.map((m, i) => <React.Fragment key={m.top}>
//       <div className="map-phase sdlc"><div className="phase-label">{m.topSub}</div><div className="phase-title">{m.top}</div></div>
//       {i < items.length - 1 && <span className="map-arrow">›</span>}
//     </React.Fragment>)}
//   </div>
//   <div className="two-row-connectors">
//     {items.map((m, i) => <React.Fragment key={m.bottom}>
//       <div className="connector-col">↓</div>
//       {i < items.length - 1 && <div className="connector-spacer" />}
//     </React.Fragment>)}
//   </div>
//   <div className="two-row-track">
//     {items.map((m, i) => <React.Fragment key={m.bottom}>
//       <div className="map-phase workflow">...</div>
//       {i < items.length - 1 && <span className="map-arrow aqua">›</span>}
//     </React.Fragment>)}
//   </div>
// </div>
// CSS: .two-row { display:flex; flex-direction:column; gap:12px; }
// .two-row-track { display:flex; align-items:stretch; }
// .map-phase { flex:1; border:1.5px solid var(--border); border-radius:8px; padding:12px 8px; text-align:center; }
// .map-phase.sdlc { background:var(--bg); }
// .map-phase.workflow { background:var(--aqua-bg); border-color:var(--aqua); }
// .map-arrow { flex-shrink:0; display:flex; align-items:center; padding:0 5px; color:var(--border); }
// .connector-col { flex:1; display:flex; justify-content:center; align-items:center; color:var(--aqua); height:20px; }
// .connector-spacer { flex-shrink:0; width:20px; }
```

## ScaleWrap — numbered 0–N engagement scale
```jsx
// Usage: items array with { num, th (Thai), en (English) }
function scaleColor(num, max = 8) {
  const t = num / max
  const alpha = 0.18 + t * 0.82
  return {
    borderColor: `rgba(12, 192, 223, ${alpha})`,
    background: `rgba(12, 192, 223, ${alpha * 0.12})`,
    levelColor: num >= max / 2 ? 'var(--aqua)' : 'var(--muted)',
  }
}
// <div className="scale-wrap">
//   {items.map(({ num, th, en }) => {
//     const { borderColor, background, levelColor } = scaleColor(num)
//     return (
//       <div key={num} className="scale-row" style={{ borderColor, background }}>
//         <span className="scale-level" style={{ color: levelColor }}>{num}</span>
//         <div className="scale-text">
//           <div className="scale-th">{th}</div>
//           <div className="scale-en">{en}</div>
//         </div>
//       </div>
//     )
//   })}
// </div>
// CSS: .scale-wrap { display:flex; flex-direction:column; gap:6px; }
// .scale-row { display:flex; align-items:center; gap:14px; padding:8px 14px; border-radius:8px; border:1.5px solid; }
// .scale-level { font-size:1rem; font-weight:700; width:24px; flex-shrink:0; text-align:center; }
// .scale-th { font-size:0.82rem; font-weight:500; } .scale-en { font-size:0.72rem; color:var(--muted); }
```

## EquationReveal — big formula + three reference cards
```jsx
// <div className="equation-hero"><span>Agent</span> = Model + Harness + Context</div>
// <div className="equation-cards">
//   <div className="eq-card"><div className="eq-card-label">Model</div><div className="eq-card-title">The Brain</div><ul className="eq-card-items">...</ul></div>
//   ...
// </div>
// CSS: .equation-hero { font-size:2rem; font-weight:700; letter-spacing:-0.02em; margin:28px 0 32px; }
// .equation-hero span { color:var(--aqua); }
// .equation-cards { display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; }
// .eq-card { border:1.5px solid var(--border); border-radius:10px; padding:18px; background:var(--card); }
// .eq-card-label { font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--aqua); margin-bottom:6px; }
// .eq-card-title { font-size:1rem; font-weight:700; color:var(--dark); margin-bottom:10px; }
// .eq-card-items { list-style:none; padding:0; } .eq-card-items li { font-size:0.78rem; color:var(--muted); }
```

## Pro/Con List
```jsx
// <ul className="pro-con-list">
//   <li className="pro"><span className="icon">✓</span> positive point</li>
//   <li className="con"><span className="icon">✗</span> negative point</li>
// </ul>
// CSS: .pro-con-list { list-style:none; padding:0; display:flex; flex-direction:column; gap:5px; }
// .pro-con-list li { display:flex; align-items:flex-start; gap:8px; font-size:0.82rem; }
// .pro { color:var(--dark); } .con { color:var(--muted); }
```
