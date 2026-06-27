import { useEffect, useState } from 'react'
import { Download, FileText, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import useWindowSize from '../hooks/useWindowSize'

const menuLinks = [
  { label: 'Resume', href: '/resume.html', external: true, icon: FileText },
  { label: 'Download PDF', href: '/resume.pdf', external: true, download: true, icon: Download },
  { label: 'Projects', href: '#experience', external: false, icon: null },
] 

export default function PageLayout({ children }) {
  const { theme, toggleTheme } = useTheme()
  const width = useWindowSize()
  const isMobile = width < 768
  const [menuOpen, setMenuOpen] = useState(false)
  const [prevIsMobile, setPrevIsMobile] = useState(isMobile)

  if (isMobile !== prevIsMobile) {
    setPrevIsMobile(isMobile)
    if (menuOpen) setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

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
          justifyContent: isMobile ? 'flex-end' : 'space-between',
          alignItems: 'center',
          padding: '0.75rem 0',
          gap: '0.6rem',
        }}>
          {!isMobile && <div />}

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button
              onClick={(e) => toggleTheme(e)}
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

            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
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
              {menuOpen ? <X size={14} strokeWidth={1.5} /> : <Menu size={14} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'color-mix(in srgb, var(--bg) 60%, transparent)',
            backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {menuOpen && (
        <div
          role="menu"
          style={{
            position: 'fixed',
            top: '3.5rem',
            right: '1rem',
            zIndex: 1001,
            minWidth: '11rem',
            padding: '0.4rem',
            border: '1px solid var(--border)',
            borderRadius: '0.6rem',
            background: 'var(--bg)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.15rem',
          }}
        >
          {menuLinks.map(({ label, href, external, download, icon: Icon }) => (
            <a
              key={label}
              href={href}
              role="menuitem"
              target={external ? '_blank' : '_self'}
              rel={external ? 'noreferrer' : undefined}
              download={download || undefined}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.6rem 0.8rem',
                borderRadius: '0.45rem',
                color: 'var(--text-2)',
                textDecoration: 'none',
                fontFamily: 'var(--mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'background 0.15s, color 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg-2)'
                e.currentTarget.style.color = 'var(--text)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--text-2)'
              }}
            >
              {Icon && <Icon size={13} strokeWidth={1.5} />}
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}

      <main style={{
        paddingTop: isMobile ? '2.25rem' : '5rem',
      }}>
        <div className="app-shell">
          {children}
        </div>
      </main>
    </>
  )
}
