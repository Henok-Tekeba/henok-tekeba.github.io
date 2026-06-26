import { ExternalLink } from 'lucide-react'
import useWindowSize from '../hooks/useWindowSize'

const projects = [
  {
    title: 'goha.et',
    tagline: 'A live tracker of the Ethiopian AI ecosystem — companies, tools, researchers, and initiatives, updating automatically.',
    image: '/goha.png',
    url: 'https://goha.et',
  },
  {
    title: 'voiET',
    tagline: 'Voice AI platform for Amharic speech recognition, transcription, and diarization — built for users overlooked by mainstream speech tech.',
    image: '/pro1.png',
    url: 'https://voiet.tech',
  },
]

export default function FeaturedProjects() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="featured-projects" style={{
      padding: isMobile ? '3rem 1.5rem' : '4rem 3rem',
    }}>
      <div className="section-heading reveal">
        <h2 className="section-heading-title">Featured Projects</h2>
        <div className="section-heading-rule" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: '1.25rem',
      }}>
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className={`reveal ${i > 0 ? `d${i}` : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              textDecoration: 'none',
              background: 'var(--bg-2)',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{
              width: '100%',
              aspectRatio: '16 / 9',
              overflow: 'hidden',
              background: 'var(--bg)',
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <div style={{
              padding: '1rem 1.25rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}>
                <span style={{
                  fontFamily: 'var(--title)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  lineHeight: 1.2,
                }}>
                  {project.title}
                </span>
                <ExternalLink size={12} strokeWidth={1.5} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
              </div>
              <p style={{
                fontFamily: 'var(--display)',
                fontWeight: 'var(--display-weight-light)',
                fontSize: '0.82rem',
                color: 'var(--text-2)',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {project.tagline}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
