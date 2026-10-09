import useWindowSize from '../hooks/useWindowSize'

const items = [
  { label: 'Building', text: 'voiET, a voice AI platform for Amharic speech recognition and transcription' },
  { label: 'Learning', text: 'distributed systems and GPU inference optimization' },
  { label: 'Looking for', text: 'summer 2026 internships, remote or relocation friendly' },
]

export default function Currently() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="currently" style={{
      padding: isMobile ? '1.5rem 1.5rem' : '2rem 3rem',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="section-heading reveal">
        <h2 className="section-heading-title">Currently</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '640px' }}>
        {items.map(({ label, text }, i) => (
          <div
            key={label}
            className={`reveal ${i === 0 ? 'd1' : i === 1 ? 'd2' : 'd3'}`}
            style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}
          >
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              lineHeight: 1.5,
              textTransform: 'uppercase',
              color: 'var(--text-3)',
              flexShrink: 0,
              width: '5.5rem',
            }}>
              {label}
            </span>
            <span style={{
              fontFamily: 'var(--display)',
              fontWeight: 'var(--display-weight-light)',
              fontSize: '0.95rem',
              color: 'var(--text-2)',
              lineHeight: 1.6,
            }}>
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
