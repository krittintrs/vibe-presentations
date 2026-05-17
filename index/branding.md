# Personal Brand – Design System

## Logo / Identity
- **Profile image:** `index/profile.jpeg` — use in place of Sentry logo/glyph
- No wordmark; profile photo is the only identity mark

## Color Palette

### CSS Variables
```css
:root {
  --dark: #202020;        /* dark grey — primary background */
  --aqua: #0cc0df;        /* aqua blue — primary accent (replaces Sentry purple) */
  --red: #ff5757;         /* red — semantic danger / highlight */
  --bg: #ffffff;          /* white — slide background */
  --card: #f4f4f4;        /* light grey — card background */
  --muted: #888888;       /* muted text */
  --border: #e0e0e0;      /* borders */
}
```

### JS Color Constants
```javascript
const DARK   = '#202020';
const AQUA   = '#0cc0df';
const RED    = '#ff5757';
const WHITE  = '#ffffff';
const MUTED  = '#888888';
const BORDER = '#e0e0e0';
```

### Usage Guide
| Role | Color | Variable |
|------|-------|----------|
| Primary accent, progress bar, active dots | Aqua blue | `--aqua` |
| Headings, dark backgrounds | Dark grey | `--dark` |
| Danger, semantic bad/error | Red | `--red` |
| Slide background | White | `--bg` |
| Card/surface | Light grey | `--card` |
| Muted text, subtitles | Grey | `--muted` |

## Typography
- **Font:** Rubik (Google Fonts) — keep from presentation-creator skill
- Same scale: h1 2.5rem / h2 1.55rem / h3 1rem / subtitle 0.95rem

## Replacing Sentry-Specific Elements
| Sentry element | Replacement |
|----------------|-------------|
| `sentry-logo.svg` | `index/profile.jpeg` (rounded, small) |
| `sentry-glyph.svg` watermark | `index/profile.jpeg` at low opacity |
| `--purple: #6c5fc7` | `--aqua: #0cc0df` |
| `--purple-bg: #ede8f5` | `#e6f9fd` (aqua tint) |
| `--purple-light: #b5aade` | `#7de0ef` (aqua light) |
