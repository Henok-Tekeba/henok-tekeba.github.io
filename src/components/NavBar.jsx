import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function NavBar() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
      return
    }
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 3rem',
      background: 'color-mix(in srgb, var(--bg) 92%, transparent)',
      borderBottom: '1px solid var(--border)',
      backdropFilter: 'blur(12px)',
    }}>
      <a href="/" style={{
        fontFamily: 'var(--title)',
        fontSize: '0.8rem',
        letterSpacing: '0.15em',
        color: 'var(--accent)',
        textDecoration: 'none',
        textTransform: 'uppercase',
      }}>
        HT
      </a>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#experience" style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          color: 'var(--text-2)',
          textDecoration: 'none',
          textTransform: 'lowercase',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
        >
          Projects
        </a>
        <a href="/resume.html" target="_blank" rel="noreferrer" style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          color: 'var(--text-2)',
          textDecoration: 'none',
          textTransform: 'lowercase',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
        >
          Resume
        </a>
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          style={{
            border: '1px solid var(--border-2)',
            background: 'transparent',
            color: 'var(--text-2)',
            width: '2.2rem',
            height: '2.2rem',
            borderRadius: '999px',
            cursor: 'pointer',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          {theme === 'dark' ? <Sun size={13} strokeWidth={1.5} /> : <Moon size={13} strokeWidth={1.5} />}
        </button>
      </div>
    </nav>
  )
}
