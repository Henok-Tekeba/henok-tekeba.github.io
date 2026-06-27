import { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'

const rotatingHeadlines = [
  'full-stack developer',
  'react • node • typescript',
  'building products end to end',
  'focused on useful systems',
]

function getPresenceStatus() {
  const hourString = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    hour12: false,
    timeZone: 'Africa/Addis_Ababa',
  }).format(new Date())

  const hour = Number.parseInt(hourString, 10)

  if (hour >= 0 && hour < 6) {
    return { label: 'asleep', color: 'var(--text-3)' }
  }

  if ((hour >= 6 && hour < 9) || (hour >= 21 && hour < 24)) {
    return { label: 'taking a break', color: 'var(--accent)' }
  }

  return { label: 'building', color: 'var(--green)' }
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: isMobile ? '4.5rem 1.5rem 1.5rem' : '5.5rem 3rem 1.5rem',
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
        lineHeight: 1.7,
        marginBottom: '3rem',
      }}>
        I build full-stack web apps and backend systems. My focus is shipping useful products for Ethiopian users - the people most tech companies ignore. Whether it is a voice AI platform, an ecosystem tracker, or an automated opportunity bot, I ship things that actually work for people who need them.
      </p>

    </section>
  )
}