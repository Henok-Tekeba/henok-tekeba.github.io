import useWindowSize from '../hooks/useWindowSize'

const experiences = [
  {
    year: '2024 — present',
    role: 'Founder & AI Engineer',
    company: 'voiET',
    desc: 'Building Amharic voice AI with Whisper ASR, XTTSv2 TTS, and a full-stack waitlist platform.',
    tags: ['PyTorch', 'HuggingFace', 'Whisper', 'Next.js', 'PostgreSQL'],
  },
  {
    year: '2024 — present',
    role: 'Robotics Competition Team Member',
    company: 'AAU VEX Robotics Team',
    desc: 'Working on design, embedded programming, and autonomous driving for VEX robotics.',
    tags: ['Robotics', 'Python', 'Autonomous Control'],
  },
  {
    year: '2024 — present',
    role: 'BSc Student',
    company: 'Addis Ababa University',
    desc: 'Second-year Electrical and Computer Engineering student.',
    tags: ['ECE', 'OOP', 'Computer Architecture'],
  },
]

export default function Experience() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="experience" style={{
      padding: isMobile ? '5rem 1.5rem' : '8rem 3rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div className="section-heading reveal">
        <h2 className="section-heading-title">Experience</h2>
        <div className="section-heading-rule" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`reveal ${i > 0 ? `d${i}` : ''}`}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '180px 1fr',
              gap: isMobile ? '0.5rem' : '3rem',
              padding: '2.5rem 0',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              color: 'var(--text-3)',
              textTransform: 'uppercase',
              marginTop: '0.25rem',
            }}>{exp.year}</p>

            <div>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                flexWrap: 'wrap',
              }}>
                <h3 style={{
                  fontFamily: 'var(--title)',
                  fontWeight: 'var(--display-weight-reg)',
                  fontSize: '1.1rem',
                  color: 'var(--text)',
                }}>{exp.role}</h3>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.65rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                }}>@ {exp.company}</span>
              </div>

              <p style={{
                fontFamily: 'var(--display)',
                fontWeight: 'var(--display-weight-light)',
                fontSize: '0.95rem',
                color: 'var(--text-2)',
                lineHeight: 1.8,
                marginBottom: '1.25rem',
              }}>{exp.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    color: 'var(--text-3)',
                    border: '1px solid var(--border)',
                    padding: '0.3rem 0.75rem',
                    textTransform: 'uppercase',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}