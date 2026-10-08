import useWindowSize from '../hooks/useWindowSize'
import { SiX } from 'react-icons/si'
import { GithubIcon, MailIcon } from './icons'

const links = [
  { label: 'GitHub', href: 'https://github.com/Henok-Tekeba', icon: GithubIcon, isBrand: true },
  { label: 'X', href: 'https://x.com/HenaTeke', icon: SiX, isBrand: true },
  { label: 'Mail', href: 'mailto:tekebahenok6@gmail.com', icon: MailIcon, isBrand: true },
]

export default function Contact() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="contact" style={{
      padding: isMobile ? '1.5rem 1.5rem' : '2rem 3rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div style={{ maxWidth: '640px' }}>
        <h2 className="reveal" style={{
          fontFamily: 'var(--title)',
          fontWeight: 'var(--display-weight-thin)',
          fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
          lineHeight: 1.15,
          color: 'var(--text)',
          marginBottom: '1rem',
        }}>
          Get in touch.
        </h2>

        <p className="reveal d1" style={{
          fontFamily: 'var(--display)',
          fontWeight: 'var(--display-weight-light)',
          fontSize: '1.02rem',
          color: 'var(--text-2)',
          lineHeight: 1.7,
          marginBottom: '1.25rem',
        }}>
          I'm looking for internships and teams building products that need technical curiosity, speed, and attention to detail.
        </p>

        <div className="reveal d2" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
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
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                lineHeight: 1.5,
                textTransform: 'uppercase',
              }}>
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
