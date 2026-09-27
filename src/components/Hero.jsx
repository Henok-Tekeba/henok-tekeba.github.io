import useWindowSize from '../hooks/useWindowSize'
import { Mail } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'

export default function Hero() {
  const width = useWindowSize()
  const isMobile = width < 768
  const photoSize = isMobile ? 46 : 54

  return (
    <section id="hero" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: isMobile ? '1.5rem 1.5rem 1.25rem' : '2rem 3rem 1.25rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.9rem' }}>
        <div style={{
          width: photoSize,
          height: photoSize,
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          border: '1px solid var(--border-2)',
          background: 'var(--bg-2)',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'var(--title)',
          fontSize: '0.7rem',
          fontWeight: 500,
          color: 'var(--text-3)',
        }}>
          <img
            src="/profile.jpg"
            alt="Henok Tekeba"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <h1 style={{
            fontFamily: 'var(--title)',
            fontWeight: 500,
            fontSize: isMobile ? 'clamp(1.05rem, 4.5vw, 1.25rem)' : 'clamp(1.1rem, 2vw, 1.4rem)',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: 'var(--text)',
          }}>
            Henok Tekeba
          </h1>

          <p style={{
            fontFamily: 'var(--display)',
            fontSize: isMobile ? '0.78rem' : '0.85rem',
            lineHeight: 1.5,
            color: 'var(--text-2)',
            margin: 0,
          }}>
            Student at AAU
          </p>
        </div>
      </div>

      <p style={{
        fontFamily: 'var(--display)',
        fontWeight: 'var(--display-weight-light)',
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        color: 'var(--text-2)',
        lineHeight: 1.6,
        marginBottom: '1.25rem',
      }}>
        I build full-stack web apps and backend systems that ship. Next.js on the front, Express and PostgreSQL on the back, with JWT auth, real-time streaming, and background pipelines. Deployed across Vercel, Railway, and Modal, and used by real people.
      </p>

      <div className="reveal" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        alignItems: 'center',
        marginBottom: '0.75rem',
      }}>
        <a
          href="mailto:me@enoch.et"
          aria-label="Email me at me@enoch.et"
          title="Email"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'var(--text-2)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
        >
          <Mail size={16} strokeWidth={1.5} style={{ opacity: 0.85 }} />
        </a>

        <a
          href="https://github.com/Henok-Tekeba"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'var(--text-2)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
        >
          <SiGithub size={16} style={{ opacity: 0.9 }} />
        </a>

        <a
          href="https://www.linkedin.com/in/henok-ayele-6ab58b356"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'var(--text-2)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
        >
          <FaLinkedinIn size={16} style={{ opacity: 0.9 }} />
        </a>
      </div>

    </section>
  )
}