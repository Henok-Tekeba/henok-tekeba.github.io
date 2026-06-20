import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{
        fontFamily: 'var(--title)',
        fontSize: 'clamp(4rem, 10vw, 7rem)',
        fontWeight: 'var(--display-weight-thin)',
        color: 'var(--text)',
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}>
        404
      </h1>
      <p style={{
        fontFamily: 'var(--display)',
        fontSize: '1.1rem',
        color: 'var(--text-2)',
        marginBottom: '2rem',
        maxWidth: '400px',
      }}>
        This page does not exist.
      </p>
      <Link
        to="/"
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          textDecoration: 'none',
          padding: '0.75rem 1.5rem',
          border: '1px solid var(--border-2)',
          borderRadius: '999px',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--text)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--accent)' }}
      >
        Back home
      </Link>
    </div>
  )
}