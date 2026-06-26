export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.1rem',
      position: 'relative',
      zIndex: 1,
    }}>
      <blockquote style={{
        fontFamily: 'var(--title)',
        fontSize: 'clamp(1.15rem, 3.1vw, 2rem)',
        lineHeight: 1,
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        color: 'var(--text)',
        textAlign: 'center',
      }}>
        BUILD USEFUL THINGS
      </blockquote>

      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.1em',
        color: 'var(--text-3)',
        textAlign: 'center',
      }}>
        2026 <span style={{ color: 'var(--text-2)' }}>Henok Tekeba</span>
      </p>
    </footer>
  )
}
