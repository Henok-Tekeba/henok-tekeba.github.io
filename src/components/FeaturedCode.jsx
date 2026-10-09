import useWindowSize from '../hooks/useWindowSize'
import { GithubIcon } from './icons'

const repos = [
  {
    name: 'voiET',
    desc: 'Voice AI platform for Amharic speech recognition and transcription',
    href: 'https://github.com/Henok-Tekeba/voiet',
  },
  {
    name: 'goha.et',
    desc: 'Live tracker of the Ethiopian AI ecosystem with daily auto updates',
    href: 'https://github.com/Henok-Tekeba/goha',
  },
  {
    name: 'opportunity-digest',
    desc: 'Telegram bot that scrapes, summarizes, and delivers opportunities daily',
    href: 'https://github.com/Henok-Tekeba/opportunity-digest',
  },
]

export default function FeaturedCode() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="code" style={{
      padding: isMobile ? '1.5rem 1.5rem' : '2rem 3rem',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="section-heading reveal">
        <h2 className="section-heading-title">Featured code</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
        gap: '1rem',
      }}>
        {repos.map((repo, i) => (
          <a
            key={repo.name}
            href={repo.href}
            target="_blank"
            rel="noreferrer"
            className={`reveal ${i === 0 ? 'd1' : i === 1 ? 'd2' : 'd3'}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              padding: '1rem',
              border: '1px solid var(--border)',
              borderRadius: '0.75rem',
              background: 'color-mix(in srgb, var(--bg-2) 92%, transparent)',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--title)',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: 'var(--text)',
            }}>
              <GithubIcon size={14} style={{ color: 'var(--text-3)' }} />
              {repo.name}
            </span>
            <span style={{
              fontFamily: 'var(--display)',
              fontWeight: 'var(--display-weight-light)',
              fontSize: '0.85rem',
              color: 'var(--text-2)',
              lineHeight: 1.6,
            }}>
              {repo.desc}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
