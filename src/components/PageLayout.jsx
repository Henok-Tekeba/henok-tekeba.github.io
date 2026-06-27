import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import useWindowSize from '../hooks/useWindowSize'

const navLinks = [
  { key: 'about', type: 'anchor' },
  { key: 'activity', type: 'anchor' },
  { key: 'experience', type: 'anchor' },
  { key: 'articles', type: 'route' },
  { key: 'skills', type: 'anchor' },
  { key: 'contact', type: 'anchor' },
]

export default function PageLayout({ children }) {
  const { theme, toggleTheme } = useTheme()
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        background: 'color-mix(in srgb, var(--bg) 92%, transparent)',
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{
          width: 'var(--shell-width)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0',
        }}>
          <Link to="/" style={{
            fontFamily: 'var(--title)',
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            color: 'var(--accent)',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}>
            HT
          </Link>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {!isMobile && (
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                {navLinks.map((link, i) => {
                  const sharedStyle = {
                    fontFamily: 'var(--mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    color: 'var(--text-2)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }

                  if (link.type === 'route') {
                    return (
                      <Link
                        key={link.key}
                        to="/articles"
                        style={sharedStyle}
                        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
                      >
                        <span style={{ color: 'var(--text-3)', marginRight: '0.3rem' }}>
                          0{i + 1}.
                        </span>
                        {link.key}
                      </Link>
                    )
                  }

                  return (
                    <a
                      key={link.key}
                      href={`#${link.key}`}
                      style={sharedStyle}
                      onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
                    >
                      <span style={{ color: 'var(--text-3)', marginRight: '0.3rem' }}>
                        0{i + 1}.
                      </span>
                      {link.key}
                    </a>
                  )
                })}
              </div>
            )}

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
        </div>
      </nav>

      <main style={{ paddingTop: '5rem' }}>
        <div className="app-shell">
          {children}
        </div>
      </main>
    </>
  )
}