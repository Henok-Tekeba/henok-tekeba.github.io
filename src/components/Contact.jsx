import useWindowSize from '../hooks/useWindowSize'
import { Mail } from 'lucide-react'
import { SiGithub, SiHuggingface, SiX } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'

const links = [
  { label: 'Email', href: 'mailto:tekebahenok6@gmail.com', icon: Mail, isBrand: false },
  { label: 'GitHub', href: 'https://github.com/Henok-Tekeba', icon: SiGithub, isBrand: true },
  { label: 'HuggingFace', href: 'https://huggingface.co/Henokk', icon: SiHuggingface, isBrand: true },
  { label: 'X', href: 'https://x.com/HenaTeke', icon: SiX, isBrand: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/henok-ayele-6ab58b356', icon: FaLinkedinIn, isBrand: true },
]

export default function Contact() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="contact" style={{
      padding: isMobile ? '5rem 1.5rem' : '8rem 3rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div className="section-heading reveal">
        <h2 className="section-heading-title">Contact</h2>
        <div className="section-heading-rule" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2.5rem' : '4rem',
        maxWidth: '960px',
      }}>
        <div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--title)',
            fontWeight: 'var(--display-weight-thin)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: '1.2rem',
          }}>
            Building something useful for Ethiopia?{' '}
            <span style={{ color: 'var(--accent)' }}>Reach out.</span>
          </h2>

          <p className="reveal d1" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '0.95rem',
            color: 'var(--text-2)',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            I am looking for internships, ML engineering work, and teams building products that need technical curiosity, speed, and local context.
          </p>

          <div className="reveal d2" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
          }}>
            {links.map(({ label, href, icon: Icon, isBrand }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 0.85rem',
                  border: '1px solid var(--border)',
                  borderRadius: '0.6rem',
                  textDecoration: 'none',
                  color: 'var(--text-3)',
                  background: 'color-mix(in srgb, var(--bg-2) 94%, transparent)',
                  transition: 'all 0.2s ease',
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
                aria-label={label}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {isBrand
                    ? <Icon size={13} style={{ opacity: 0.85 }} />
                    : <Icon size={13} strokeWidth={1.5} style={{ opacity: 0.85 }} />}
                </span>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}>
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="reveal d1">
          <form
            action="https://formspree.io/f/xdkowqgv"
            method="POST"
            style={{
              display: 'grid',
              gap: '0.9rem',
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.82rem',
                padding: '0.75rem 1rem',
                border: '1px solid var(--border)',
                borderRadius: '0.6rem',
                background: 'color-mix(in srgb, var(--bg-2) 94%, transparent)',
                color: 'var(--text)',
                outline: 'none',
                width: '100%',
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.82rem',
                padding: '0.75rem 1rem',
                border: '1px solid var(--border)',
                borderRadius: '0.6rem',
                background: 'color-mix(in srgb, var(--bg-2) 94%, transparent)',
                color: 'var(--text)',
                outline: 'none',
                width: '100%',
              }}
            />
            <textarea
              name="message"
              placeholder="What are you building?"
              required
              rows={4}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.82rem',
                padding: '0.75rem 1rem',
                border: '1px solid var(--border)',
                borderRadius: '0.6rem',
                background: 'color-mix(in srgb, var(--bg-2) 94%, transparent)',
                color: 'var(--text)',
                outline: 'none',
                width: '100%',
                resize: 'vertical',
                minHeight: '100px',
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.11em',
                textTransform: 'uppercase',
                padding: '0.7rem 1.25rem',
                border: '1px solid var(--border)',
                borderRadius: '0.6rem',
                background: 'color-mix(in srgb, var(--bg-2) 94%, transparent)',
                color: 'var(--text-2)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: 'fit-content',
                lineHeight: 1,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--text)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-2)'
              }}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}