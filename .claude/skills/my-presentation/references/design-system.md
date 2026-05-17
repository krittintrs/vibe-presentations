# Boilerplate Templates

## index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
    <title>PRESENTATION TITLE</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## package.json
```json
{
  "name": "presentation-name",
  "private": true,
  "type": "module",
  "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview" },
  "dependencies": { "react": "^18.3.1", "react-dom": "^18.3.1" },
  "devDependencies": { "@vitejs/plugin-react": "^4.3.4", "vite": "^6.0.0", "vite-plugin-singlefile": "^2.3.0" }
}
```

## vite.config.js — ALWAYS use this exact template
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  server: {
    fs: { allow: ['..'] }
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, '../asset')
    }
  }
})
```

## src/main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

## src/App.jsx
```jsx
import { useState, useCallback, useEffect } from 'react'
import profileImg from './assets/profile.jpeg'
import { slides as SLIDES } from './slides/index'

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

  return (
    <>
      {cur > 0 && (
        <div className="watermark">
          <img src={profileImg} alt="" />
          <span className="watermark-title">PRESENTATION TITLE</span>
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
```

## src/slides/index.js
```js
import Slide00 from './Slide00'
// import more slides here...

export const slides = [
  Slide00,
  // add slides in order
]
```

## src/slides/shared.jsx
```jsx
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
// Add shared diagram components here (SDLCFlow, etc.)
```

## src/App.css — full design system
```css
:root {
  --dark: #202020; --aqua: #0cc0df; --aqua-light: #7de0ef; --aqua-bg: #e6f9fd;
  --red: #ff5757; --red-bg: #fff0f0; --bg: #ffffff; --card: #f4f4f4;
  --muted: #888888; --border: #e0e0e0;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Rubik', system-ui, sans-serif; color: var(--dark);
  background: var(--bg); line-height: 1.7; font-size: 0.9rem;
  overflow: hidden; height: 100vh;
}
.progress { position: fixed; top: 0; left: 0; height: 3px; background: var(--aqua); transition: width 0.3s; z-index: 10; }
.watermark { position: fixed; top: 20px; left: 24px; z-index: 8; opacity: 0.15; pointer-events: none; display: flex; align-items: center; gap: 10px; }
.watermark img { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
.watermark-title { font-size: 0.95rem; font-weight: 600; letter-spacing: -0.01em; color: var(--dark); }
.slide { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.45s ease; }
.slide.active { opacity: 1; pointer-events: auto; }
.slide-content { width: 100%; max-width: 900px; padding: 60px 40px 100px; }
h1 { font-size: 2.5rem; font-weight: 700; letter-spacing: -0.03em; line-height: 1.2; }
h2 { font-size: 1.55rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 10px; }
h3 { font-size: 1rem; font-weight: 600; margin-bottom: 6px; }
.subtitle { font-size: 0.95rem; color: var(--muted); max-width: 620px; margin-bottom: 32px; }
.cols { display: flex; gap: 32px; } .col { flex: 1; }
.cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.card { background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 20px; }
.card-aqua { border-color: var(--aqua); border-top: 3px solid var(--aqua); background: var(--aqua-bg); }
.hcard-icon { font-size: 1.6rem; margin-bottom: 10px; display: block; color: var(--aqua); line-height: 1; }
.hcard-name { font-size: 1rem; font-weight: 600; color: var(--dark); margin-bottom: 6px; }
.hcard-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.4; }
.tag { display: inline-block; font-size: 0.66rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 4px; margin-bottom: 12px; }
.tag-aqua { background: var(--aqua-bg); color: var(--aqua); }
.tag-red { background: var(--red-bg); color: var(--red); }
@keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
.anim h1, .anim h2, .anim .subtitle, .anim .cols, .anim .cards, .anim ul,
.anim .scale-wrap, .anim table, .anim .two-row, .anim .cycle-grid, .anim .equation-cards
{ opacity: 0; animation: fadeUp 0.5s ease both; }
.anim .d1 { animation-delay: 0.08s; } .anim .d2 { animation-delay: 0.18s; }
.anim .d3 { animation-delay: 0.28s; } .anim .d4 { animation-delay: 0.38s; }
nav { position: fixed; bottom: 0; left: 0; right: 0; display: flex; align-items: center; justify-content: center; gap: 16px; padding: 16px; z-index: 5; }
nav button { background: none; border: none; cursor: pointer; font-family: inherit; font-size: 0.85rem; color: var(--muted); padding: 4px 10px; border-radius: 4px; transition: color 0.2s; }
nav button:hover { color: var(--dark); } nav button:disabled { opacity: 0.2; cursor: default; }
.slide-number { font-size: 0.75rem; color: var(--muted); font-variant-numeric: tabular-nums; }
.dots { display: flex; gap: 6px; }
.dot { width: 6px; height: 6px; border-radius: 50%; background: var(--border); cursor: pointer; transition: background 0.2s; }
.dot.on { background: var(--aqua); }
```
