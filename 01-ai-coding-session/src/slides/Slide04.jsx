const CYCLE_STEPS = [
  { num: 1, name: 'Read',   example: 'Gather context — point AI at the right files and background' },
  { num: 2, name: 'Plan',   example: 'Ask for a plan before any code is written' },
  { num: 3, name: 'Do',     example: "Let AI generate — stay in the loop, guide it" },
  { num: 4, name: 'Verify', example: "Review output, run tests, iterate until it's right" },
]

function CycleStep({ step }) {
  return (
    <div className="cycle-step">
      <div className="cycle-step-num">Step {step.num}</div>
      <div className="cycle-step-name">{step.name}</div>
      <div className="cycle-step-example">{step.example}</div>
    </div>
  )
}

export default function Slide04() {
  const [tl, tr, br, bl] = CYCLE_STEPS
  return (
    <>
      <h2>The Workflow Pattern</h2>
      <p className="subtitle">Same 4 steps with every tool, every task — learn once, apply everywhere.</p>
      <div className="cycle-grid d2">
        <CycleStep step={tl} />
        <div className="cycle-arrow-h">→</div>
        <CycleStep step={tr} />
        <div className="cycle-arrow-v">↑</div>
        <div className="cycle-center" />
        <div className="cycle-arrow-v">↓</div>
        <CycleStep step={bl} />
        <div className="cycle-arrow-h">←</div>
        <CycleStep step={br} />
      </div>
    </>
  )
}
