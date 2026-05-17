import { profileImg } from './shared'

export default function Slide00() {
  return (
    <>
      <img
        src={profileImg}
        alt=""
        style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, display: 'block' }}
      />
      <h1>Coding with AI 101:<br />From Tools to Agents</h1>
      <p className="subtitle" style={{ marginTop: 16 }}>
        Workflow · Models · Harness · Context<br />
        A practical guide for developer teams
      </p>
      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 40 }}>
        Krittin Thirasak (Tin) &nbsp;·&nbsp; 2026
      </p>
    </>
  )
}
