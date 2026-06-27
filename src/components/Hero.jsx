import { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { Mail } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'

const rotatingHeadlines = [
  'full-stack developer',
  'react • node • typescript',
  'building products end to end',
  'focused on useful systems',
]

export default function Hero() {
  const width = useWindowSize()
  const isMobile = width < 768
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [isHeadlineVisible, setIsHeadlineVisible] = useState(true)

  useEffect(() => {
    const headlineTimer = setInterval(() => {
      setIsHeadlineVisible(false)

      setTimeout(() => {
        setHeadlineIndex(prev => (prev + 1) % rotatingHeadlines.length)
        setIsHeadlineVisible(true)
      }, 220)
    }, 2500)

    return () => clearInterval(headlineTimer)
  }, [])

  return (
    <section id="hero" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: isMobile ? '2rem 1.5rem 1.5rem' : '5.5rem 3rem 1.5rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.7rem' }}>
        <h1 style={{
          fontFamily: 'var(--title)',
          fontWeight: 600,
          fontSize: isMobile ? 'clamp(1.6rem, 6vw, 2.2rem)' : 'clamp(1.8rem, 3.5vw, 2.8rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
        }}>
          Henok Tekeba
        </h1>

        <p style={{
          fontFamily: 'var(--title)',
          fontSize: isMobile ? '0.72rem' : '0.85rem',
          letterSpacing: '0.08em',
          color: 'var(--text-2)',
          minHeight: '1.3rem',
          opacity: isHeadlineVisible ? 1 : 0,
          transform: isHeadlineVisible ? 'translateY(0)' : 'translateY(5px)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        }}>
          {rotatingHeadlines[headlineIndex]}
        </p>

        <div className="reveal" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem 1.25rem',
          alignItems: 'center',
          marginTop: '1.1rem',
        }}>
          <a
            href="mailto:me@enoch.et"
            aria-label="Email me at me@enoch.et"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-2)',
              textDecoration: 'none',
              fontFamily: 'var(--mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.02em',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
          >
            <Mail size={16} strokeWidth={1.5} style={{ opacity: 0.85 }} />
            <span>me@enoch.et</span>
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
      </div>

      <p style={{
        fontFamily: 'var(--display)',
        fontWeight: 'var(--display-weight-light)',
        fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
        color: 'var(--text-2)',
        lineHeight: 1.7,
        marginBottom: '3rem',
      }}>
        I build full-stack web apps and backend systems that ship real value. From Next.js frontends to Express APIs and PostgreSQL databases, I write clean code that solves problems for people who need working software, not buzzwords.
      </p>

    </section>
  )
}