import { Link, useLocation } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { Home } from 'lucide-react'

const quickLinks = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#experience' },
  { label: 'Articles', href: '/articles' },
  { label: 'Resume', href: '/resume.html', external: true },
  { label: 'Contact', href: '/#contact' },
]

export default function NotFoundPage() {
  const location = useLocation()
  const attempted = location.pathname + (location.search || '')

  return (
    <PageLayout>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 12rem)',
        padding: '2rem 3rem 4rem',
        maxWidth: '640px',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.25rem',
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: 'var(--accent)',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-3)',
          }}>
            Error 404 · Page not found
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--title)',
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: 700,
          color: 'var(--text)',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          marginBottom: '1rem',
        }}>
          Lost in the <span style={{ color: 'var(--accent)' }}>void</span>.
        </h1>

        <p style={{
          fontFamily: 'var(--display)',
          fontSize: '1rem',
          color: 'var(--text-2)',
          lineHeight: 1.7,
          marginBottom: '0.5rem',
          maxWidth: '440px',
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          color: 'var(--text-3)',
          marginBottom: '2.25rem',
          padding: '0.4rem 0.7rem',
          border: '1px solid var(--border)',
          borderRadius: '0.4rem',
          background: 'var(--bg-2)',
          wordBreak: 'break-all',
          maxWidth: '100%',
        }}>
          <span style={{ color: 'var(--accent)', marginRight: '0.4rem' }}>›</span>
          {attempted}
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2.5rem',
        }}>
          {quickLinks.map(({ label, href, external }) => (
            <Link
              key={label}
              to={href}
              target={external ? '_blank' : '_self'}
              rel={external ? 'noreferrer' : undefined}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-2)',
                textDecoration: 'none',
                padding: '0.45rem 0.8rem',
                border: '1px solid var(--border)',
                borderRadius: '0.45rem',
                background: 'color-mix(in srgb, var(--bg-2) 94%, transparent)',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--text)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-2)'
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text)',
            textDecoration: 'none',
            padding: '0.75rem 1.4rem',
            border: '1px solid var(--border-2)',
            borderRadius: '999px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.color = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-2)'
            e.currentTarget.style.color = 'var(--text)'
          }}
        >
          <Home size={13} strokeWidth={1.5} />
          Back home
        </Link>
      </section>
    </PageLayout>
  )
}
