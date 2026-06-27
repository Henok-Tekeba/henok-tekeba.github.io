import { Link } from 'react-router-dom'
import { GraduationCap, Mail, MapPin, Sparkles } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'
import useReveal from '../hooks/useReveal'
import useWindowSize from '../hooks/useWindowSize'
import Footer from '../components/Footer'
import PageLayout from '../components/PageLayout'

const facts = [
  { label: 'Location', value: 'Addis Ababa, Ethiopia', Icon: MapPin },
  { label: 'University', value: 'Addis Ababa University', Icon: GraduationCap },
  { label: 'Looking for', value: 'Internships & full-stack roles', Icon: Sparkles },
]

const socials = [
  { label: 'Email', href: 'mailto:me@enoch.et', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/Henok-Tekeba', icon: SiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/henok-ayele-6ab58b356', icon: FaLinkedinIn },
]

export default function AboutPage() {
  useReveal()
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <PageLayout>
      <main style={{
        padding: isMobile ? '3rem 1.25rem 3rem' : '4rem 0 4rem',
      }}>
        <div className="section-heading reveal">
          <h1 className="section-heading-title">About</h1>
          <div className="section-heading-rule" />
        </div>

        <div className="reveal d1" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '700px',
          marginBottom: '2.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            lineHeight: 1.6,
            color: 'var(--text)',
          }}>
            I build full-stack web products and backend systems for users who are usually treated as edge cases by the mainstream market.
          </p>

          <p style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '0.95rem',
            color: 'var(--text-2)',
            lineHeight: 1.8,
          }}>
            My work spans frontend, backend, and infrastructure — web apps, APIs, databases, and the unglamorous work of turning ideas into deployed products people actually use. I'm currently studying at Addis Ababa University and building full-stack products that serve Ethiopian users.
          </p>

          <p style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '0.95rem',
            color: 'var(--text-2)',
            lineHeight: 1.8,
          }}>
            The thread through everything is local usefulness. Building software that respects Ethiopian realities instead of assuming Silicon Valley defaults. My recent work includes building a full-stack Voice AI platform with real-time streaming via Server-Sent Events, audio chunking pipelines deployed on Modal, and a Telegram opportunity bot that scrapes and summarizes opportunities daily.
          </p>
        </div>

        <div className="reveal d2" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '1rem' : '3rem',
          marginBottom: '2.5rem',
        }}>
          {facts.map(({ label, value, Icon }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Icon size={16} strokeWidth={1.5} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--text-3)',
                }}>
                  {label}
                </div>
                <div style={{
                  fontFamily: 'var(--display)',
                  fontSize: '0.82rem',
                  color: 'var(--text-2)',
                }}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal d2" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '2.5rem',
        }}>
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 0.9rem',
                border: '1px solid var(--border)',
                borderRadius: '0.6rem',
                textDecoration: 'none',
                color: 'var(--text-3)',
                background: 'color-mix(in srgb, var(--bg-2) 94%, transparent)',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-3)'
              }}
            >
              <Icon size={13} strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </div>

        <div className="reveal d3" style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '2rem',
        }}>
          <p style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '0.9rem',
            color: 'var(--text-2)',
            lineHeight: 1.7,
          }}>
            I'm looking for internship and full-stack development opportunities where I can contribute to real products, work with experienced engineers, and keep building. If you're working on something interesting or just want to connect —{' '}
            <a href="mailto:me@enoch.et" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
              reach out
            </a>.
          </p>
        </div>
      </main>

      <Footer />
    </PageLayout>
  )
}
