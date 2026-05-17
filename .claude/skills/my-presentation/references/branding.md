# Personal Brand — Design System

## Color Palette

### CSS Variables
```css
:root {
  --dark: #202020;
  --aqua: #0cc0df;
  --aqua-light: #7de0ef;
  --aqua-bg: #e6f9fd;
  --red: #ff5757;
  --red-bg: #fff0f0;
  --bg: #ffffff;
  --card: #f4f4f4;
  --muted: #888888;
  --border: #e0e0e0;
}
```

### JS Constants
```javascript
const DARK   = '#202020';
const AQUA   = '#0cc0df';
const RED    = '#ff5757';
const WHITE  = '#ffffff';
const MUTED  = '#888888';
const BORDER = '#e0e0e0';
```

### Usage
| Role | Variable |
|------|----------|
| Primary accent, progress bar, active dots, highlights | `--aqua` |
| Headings, body text, dark backgrounds | `--dark` |
| Danger / semantic bad | `--red` |
| Slide background | `--bg` (white) |
| Card surfaces | `--card` |
| Subtitles, muted labels | `--muted` |

## Typography
- **Font:** Rubik (Google Fonts) — load in index.html
- h1: 2.5rem / 700 / letter-spacing -0.03em
- h2: 1.55rem / 600 / letter-spacing -0.02em
- h3: 1rem / 600
- subtitle: 0.95rem / 400 / color var(--muted)
- body: 0.9rem / 400 / line-height 1.7

## Identity
- **Watermark:** `profile.jpeg` — circular, 36px, opacity 0.15, fixed top-left
- **Watermark title:** presentation name in 0.95rem / 600
- Hidden on slide 0 (title slide)
- No wordmark or company logo
