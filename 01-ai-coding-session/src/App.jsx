import { useState, useCallback, useEffect } from 'react'
import profileImg from './assets/profile.jpeg'
import { slides as SLIDES } from './slides/index'

// ─── Navigation ──────────────────────────────────────────────────────────────
function Nav({ cur, total, go, setCur }) {
  return (
    <nav>
      <button onClick={() => go(-1)} disabled={cur === 0}>←</button>
      <div className="dots">
        {Array.from({ length: total }, (_, i) => (
          <div key={i} className={`dot${i === cur ? ' on' : ''}`} onClick={() => setCur(i)} />
        ))}
      </div>
      <button onClick={() => go(1)} disabled={cur === total - 1}>→</button>
      <span className="slide-number">{cur + 1} / {total}</span>
    </nav>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [cur, setCur] = useState(0)
  const go = useCallback((d) => setCur(c => Math.max(0, Math.min(SLIDES.length - 1, c + d))), [])

  useEffect(() => {
    const h = (e) => {
      if (e.target.tagName === 'INPUT') return
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(1) }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [go])

  if (SLIDES.length === 0) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column', gap: 12 }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden' }}>
          <img src={profileImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Slides coming soon…</p>
      </div>
    )
  }

  return (
    <>
      {cur > 0 && (
        <div className="watermark">
          <img src={profileImg} alt="" />
          <span className="watermark-title">AI Coding Session</span>
        </div>
      )}

      <div className="progress" style={{ width: `${((cur + 1) / SLIDES.length) * 100}%` }} />

      {SLIDES.map((S, i) => (
        <div key={i} className={`slide${i === cur ? ' active' : ''}`}>
          <div className={`slide-content${i === cur ? ' anim' : ''}`}>
            <S />
          </div>
        </div>
      ))}

      <Nav cur={cur} total={SLIDES.length} go={go} setCur={setCur} />
    </>
  )
}
