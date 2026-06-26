import { GraduationCap, MapPin, Sparkles } from 'lucide-react'

const facts = [
  { label: 'Location', value: 'Addis Ababa, Ethiopia', Icon: MapPin },
  { label: 'University', value: 'Addis Ababa University', Icon: GraduationCap },
  { label: 'Looking for', value: 'Internships & full-stack roles', Icon: Sparkles },
]

export default function About() {
  return (
    <section id="about" style={{
      padding: '5.5rem 3rem 8rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div className="section-heading reveal">
        <h2 className="section-heading-title">About</h2>
        <div className="section-heading-rule" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        maxWidth: '960px',
      }}>
        <div>
          <p className="reveal" style={{
            fontFamily: 'var(--title)',
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            lineHeight: 1.6,
            color: 'var(--text)',
            marginBottom: '1.5rem',
          }}>
            I build full-stack web products and backend systems for{' '}
            <span style={{ color: 'var(--accent)' }}>users who are usually treated as edge cases</span>
            {' '}by the mainstream market.
          </p>

          <p className="reveal d1" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '0.95rem',
            color: 'var(--text-2)',
            lineHeight: 1.85,
            marginBottom: '1.5rem',
          }}>
            My work spans frontend, backend, and infrastructure — web apps, APIs, databases, and the unglamorous work of turning ideas into deployed products people actually use.
          </p>

          <p className="reveal d2" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '0.95rem',
            color: 'var(--text-2)',
            lineHeight: 1.85,
          }}>
            The thread through everything is local usefulness. Building software that respects Ethiopian realities instead of assuming Silicon Valley defaults.
          </p>
        </div>

        <div className="reveal d1" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}>
          {facts.map(({ label, value, Icon }) => (
            <div key={label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 1.25rem',
              border: '1px solid var(--border)',
              borderRadius: '0.75rem',
              background: 'color-mix(in srgb, var(--bg-2) 94%, transparent)',
            }}>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '0.5rem',
                background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
                color: 'var(--accent)',
                flexShrink: 0,
              }}>
                <Icon size={16} strokeWidth={1.5} />
              </span>
              <div>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.5rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-3)',
                  display: 'block',
                  marginBottom: '0.15rem',
                }}>
                  {label}
                </span>
                <span style={{
                  fontFamily: 'var(--display)',
                  fontSize: '0.85rem',
                  color: 'var(--text-2)',
                  lineHeight: 1.4,
                }}>
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}