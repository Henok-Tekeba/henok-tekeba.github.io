import { GraduationCap, MapPin, Sparkles } from 'lucide-react'

const facts = [
  { label: 'Location', value: 'Addis Ababa, Ethiopia', Icon: MapPin },
  { label: 'University', value: 'Addis Ababa University', Icon: GraduationCap },
  { label: 'Looking for', value: 'Internships & full-stack roles', Icon: Sparkles },
]

export default function About() {
  return (
    <section id="about">

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
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            lineHeight: 1.6,
            color: 'var(--text)',
            marginBottom: '1.2rem',
          }}>
            I build full-stack web products and backend systems for{' '}
            <span style={{ color: 'var(--accent)' }}>users who are usually treated as edge cases</span>
            {' '}by the mainstream market.
          </p>

          <p className="reveal d1" style={{
            fontSize: '0.9rem',
            color: 'var(--text-2)',
            lineHeight: 1.7,
            marginBottom: '1.2rem',
          }}>
            My work spans frontend, backend, and infrastructure - web apps, APIs, databases, and the unglamorous work of turning ideas into deployed products people actually use.
          </p>

          <p className="reveal d2" style={{
            fontSize: '0.9rem',
            color: 'var(--text-2)',
            lineHeight: 1.7,
          }}>
            The thread through everything is local usefulness. Building software that respects Ethiopian realities instead of assuming Silicon Valley defaults.
          </p>
        </div>

        <div className="reveal d1" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {facts.map(({ label, value, Icon }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Icon size={14} strokeWidth={1.5} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {label}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-2)' }}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}