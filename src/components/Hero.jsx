import { useEffect, useState } from 'react'
import { Download, FileText } from 'lucide-react'
import useWindowSize from '../hooks/useWindowSize'

const rotatingHeadlines = [
  'Amharic AI builder',
  'ML engineer in progress',
  'Shipping for real users',
  'Focused on useful systems',
]

function getPresenceStatus() {
  const hourString = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    hour12: false,
    timeZone: 'Africa/Addis_Ababa',
  }).format(new Date())

  const hour = Number.parseInt(hourString, 10)

  if (hour >= 0 && hour < 6) {
    return { label: 'Currently Asleep', color: 'var(--text-3)' }
  }

  if ((hour >= 6 && hour < 9) || (hour >= 21 && hour < 24)) {
    return { label: 'Currently: idle', color: 'var(--accent)' }
  }

  return { label: 'Currently: deep in code', color: 'var(--green)' }
}

export default function Hero() {
  const width = useWindowSize()
  const isMobile = width < 768
  const resumeHref = `${import.meta.env.BASE_URL}resume.html`
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [isHeadlineVisible, setIsHeadlineVisible] = useState(true)
  const [isLiveDotOn, setIsLiveDotOn] = useState(true)
  const [presence, setPresence] = useState(getPresenceStatus)

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

  useEffect(() => {
    const liveDotTimer = setInterval(() => {
      setIsLiveDotOn(prev => !prev)
    }, 1000)

    return () => clearInterval(liveDotTimer)
  }, [])

  useEffect(() => {
    const presenceTimer = setInterval(() => {
      setPresence(getPresenceStatus())
    }, 60000)

    return () => clearInterval(presenceTimer)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: isMobile ? '68vh' : '74vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: isMobile ? '5.8rem 1.5rem 2rem' : '7.2rem 3rem 2rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.7rem' }}>
        <h1 style={{
          fontFamily: 'var(--title)',
          fontWeight: 'var(--display-weight-thin)',
          fontSize: isMobile ? 'clamp(2rem, 8vw, 2.8rem)' : 'clamp(2.5rem, 5vw, 4rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
        }}>
          Henok <span style={{ color: 'var(--accent)' }}>Tekeba</span>
        </h1>

        <p style={{
          fontFamily: 'var(--title)',
          fontSize: isMobile ? '0.72rem' : '0.85rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-2)',
          minHeight: '1.3rem',
          opacity: isHeadlineVisible ? 1 : 0,
          transform: isHeadlineVisible ? 'translateY(0)' : 'translateY(5px)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        }}>
          {rotatingHeadlines[headlineIndex]}
        </p>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          width: 'fit-content',
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: presence.color,
            boxShadow: `0 0 0 4px color-mix(in srgb, ${presence.color} 18%, transparent)`,
            flexShrink: 0,
            opacity: isLiveDotOn ? 1 : 0.58,
            transition: 'opacity 0.65s ease',
          }} />
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.58rem',
            letterSpacing: '0.11em',
            textTransform: 'uppercase',
            color: 'var(--text-2)',
            lineHeight: 1,
          }}>
            {presence.label}
          </span>
        </div>
      </div>

      <p style={{
        fontFamily: 'var(--display)',
        fontWeight: 'var(--display-weight-light)',
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: 'var(--text-2)',
        maxWidth: '520px',
        lineHeight: 1.8,
        marginBottom: '3rem',
      }}>
        I am a second-year ECE student at AAU building speech AI and product systems for Ethiopian users. My focus is simple: make language technology useful in the places where it is usually ignored.
      </p>

      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
        <a
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            width: 'fit-content',
            padding: '0.68rem 0.92rem',
            border: '1px solid var(--border-2)',
            borderRadius: '999px',
            textDecoration: 'none',
            color: 'var(--text-2)',
            background: 'color-mix(in srgb, var(--bg-2) 88%, transparent)',
            transition: 'all 0.2s ease',
            lineHeight: 1,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.color = 'var(--text)'
            e.currentTarget.style.boxShadow = '0 0 0 1px color-mix(in srgb, var(--accent) 35%, transparent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-2)'
            e.currentTarget.style.color = 'var(--text-2)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          aria-label="Open resume"
        >
          <FileText size={14} strokeWidth={1.5} style={{ opacity: 0.9 }} />
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.11em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}>
            Resume
          </span>
        </a>
        <a
          href={`${resumeHref}?print`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            width: 'fit-content',
            padding: '0.68rem 0.92rem',
            border: '1px solid var(--border-2)',
            borderRadius: '999px',
            textDecoration: 'none',
            color: 'var(--text-2)',
            background: 'color-mix(in srgb, var(--bg-2) 88%, transparent)',
            transition: 'all 0.2s ease',
            lineHeight: 1,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.color = 'var(--text)'
            e.currentTarget.style.boxShadow = '0 0 0 1px color-mix(in srgb, var(--accent) 35%, transparent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-2)'
            e.currentTarget.style.color = 'var(--text-2)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          aria-label="Download resume as PDF"
        >
          <Download size={14} strokeWidth={1.5} style={{ opacity: 0.9 }} />
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.11em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}>
            Download PDF
          </span>
        </a>
      </div>

    </section>
  )
}