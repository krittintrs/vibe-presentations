const SCALE_ITEMS = [
  { num: 0, th: 'ไม่ใช้เลย',                              en: 'Not using AI at all' },
  { num: 1, th: 'ก้อปโค้ดไปถาม AI',                       en: 'Copy-paste code into ChatGPT / Claude' },
  { num: 2, th: 'ถามตอบกับ AI ใน IDE',                    en: 'Chat with AI inside your editor' },
  { num: 3, th: 'ให้ AI แก้ format',                       en: 'AI reformats / cleans up code' },
  { num: 4, th: 'ให้ AI อ่านโค้ด แล้วแก้โค้ดให้',         en: 'AI reads context and edits code directly' },
  { num: 5, th: 'โหลด skill / agent / workflow มาใช้',    en: 'Load skills, agents, slash commands from the community' },
  { num: 6, th: 'สร้าง skill / agent / workflow เอง',     en: 'Build your own skills and workflows' },
  { num: 7, th: 'สร้าง AI agent หลายตัว',                 en: 'Orchestrate multiple AI agents' },
  { num: 8, th: 'ให้ AI คุม agent อีกที',                  en: 'AI manages other agents autonomously' },
]

function scaleColor(num) {
  const t = num / 8
  const alpha = 0.18 + t * 0.82
  return {
    borderColor: `rgba(12, 192, 223, ${alpha})`,
    background: `rgba(12, 192, 223, ${alpha * 0.12})`,
    levelColor: num >= 4 ? 'var(--aqua)' : 'var(--muted)',
  }
}

export default function Slide03() {
  return (
    <>
      <h2>How Much Are You Using AI?</h2>
      <p className="subtitle">ตอนนี้คุณอยู่ระดับไหน — raise your hand when I pass your level</p>
      <div className="scale-wrap d2">
        {SCALE_ITEMS.map(({ num, th, en }) => {
          const { borderColor, background, levelColor } = scaleColor(num)
          return (
            <div key={num} className="scale-row" style={{ borderColor, background }}>
              <span className="scale-level" style={{ color: levelColor }}>{num}</span>
              <div className="scale-text">
                <div className="scale-th">{th}</div>
                <div className="scale-en">{en}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
