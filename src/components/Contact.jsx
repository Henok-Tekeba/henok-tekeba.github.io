import { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { SiGithub, SiHuggingface, SiX } from 'react-icons/si'

const links = [
  { label: 'GitHub', href: 'https://github.com/Henok-Tekeba', icon: SiGithub, isBrand: true },
  { label: 'HuggingFace', href: 'https://huggingface.co/Henokk', icon: SiHuggingface, isBrand: true },
  { label: 'X', href: 'https://x.com/HenaTeke', icon: SiX, isBrand: true },
] 

export default function Contact() {
  const width = useWindowSize()
  const isMobile = width < 768
  const [formState, setFormState] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('loading')
    setMessage('')

    const formData = new FormData(e.currentTarget)
    // Honeypot field - if filled, it's spam
    if (formData.get('website')) {
      setFormState('success')
      setMessage('Thanks! Your message has been sent.')
      e.currentTarget.reset()
      return
    }

    try {
      const response = await fetch('https://formspree.io/f/xpqgdezz', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })

      if (response.ok) {
        setFormState('success')
        setMessage('Thanks! Your message has been sent.')
        e.currentTarget.reset()
      } else {
        setFormState('error')
        setMessage('Something went wrong. Please try again or email directly.')
      }
    } catch {
      setFormState('error')
      setMessage('Network error. Please try again or email directly.')
    }
  }

  return (
    <section id="contact" style={{
      padding: isMobile ? '3rem 1.5rem' : '4rem 3rem',
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
            Have a project or idea?{' '}
            <span style={{ color: 'var(--accent)' }}>Let's talk.</span>
          </h2>

          <p className="reveal d1" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '0.95rem',
            color: 'var(--text-2)',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            I'm looking for internships and teams building products that need technical curiosity, speed, and attention to detail.
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
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
            <label style={{ display: 'grid', gap: '0.4rem' }}>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.06em',
                color: 'var(--text-2)',
              }}>
                Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.82rem',
                  padding: '0.65rem 0.85rem',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  background: 'transparent',
                  color: 'var(--text)',
                  outline: 'none',
                  width: '100%',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.boxShadow = '0 0 0 2px color-mix(in srgb, var(--accent) 20%, transparent)'
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </label>
            <label style={{ display: 'grid', gap: '0.4rem' }}>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.06em',
                color: 'var(--text-2)',
              }}>
                Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.82rem',
                  padding: '0.65rem 0.85rem',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  background: 'transparent',
                  color: 'var(--text)',
                  outline: 'none',
                  width: '100%',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.boxShadow = '0 0 0 2px color-mix(in srgb, var(--accent) 20%, transparent)'
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </label>
            <label style={{ display: 'grid', gap: '0.4rem' }}>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.06em',
                color: 'var(--text-2)',
              }}>
                Message
              </span>
              <textarea
                name="message"
                placeholder="What are you building?"
                required
                rows={4}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.82rem',
                  padding: '0.65rem 0.85rem',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  background: 'transparent',
                  color: 'var(--text)',
                  outline: 'none',
                  width: '100%',
                  resize: 'vertical',
                  minHeight: '100px',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.boxShadow = '0 0 0 2px color-mix(in srgb, var(--accent) 20%, transparent)'
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </label>
            {/* Honeypot field for spam protection */}
            <input type="hidden" name="website" tabIndex={-1} autoComplete="off" />

            <button
              type="submit"
              disabled={formState === 'loading'}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.11em',
                textTransform: 'uppercase',
                padding: '0.65rem 1.25rem',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                background: formState === 'loading' ? 'var(--bg-2)' : 'var(--bg)',
                color: formState === 'loading' ? 'var(--text-3)' : 'var(--text-2)',
                cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                width: 'fit-content',
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
              onMouseEnter={e => {
                if (formState !== 'loading') {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--text)'
                }
              }}
              onMouseLeave={e => {
                if (formState !== 'loading') {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-2)'
                }
              }}
            >
              {formState === 'loading' && <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />}
              {formState === 'success' && <CheckCircle size={14} />}
              {formState === 'error' && <AlertCircle size={14} />}
              {formState === 'loading' ? 'Sending...' : formState === 'success' ? 'Sent!' : formState === 'error' ? 'Failed' : 'Send message'}
            </button>

            {message && (
              <p style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.06em',
                color: formState === 'success' ? 'var(--green)' : formState === 'error' ? 'var(--accent)' : 'var(--text-2)',
                margin: 0,
              }}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}