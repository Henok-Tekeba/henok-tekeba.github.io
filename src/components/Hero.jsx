import { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'

const rotatingHeadlines = [
  'Full-stack developer',
  'React • Node • TypeScript',
  'Shipping products end to end',
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
          fontWeight: 900,
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
        fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
        color: 'var(--text-2)',
        maxWidth: '380px',
        lineHeight: 1.7,
        marginBottom: '3rem',
      }}>
        I am a second-year ECE student at AAU building full-stack web products and backend systems for Ethiopian users. My focus is simple: build things that work for people who are usually overlooked.
      </p>

    </section>
  )
}