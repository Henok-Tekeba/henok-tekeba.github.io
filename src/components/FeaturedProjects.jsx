import { Globe } from 'lucide-react'
import { SiNextdotjs, SiExpress, SiPostgresql, SiGithubactions, SiOpenai } from 'react-icons/si'
import useWindowSize from '../hooks/useWindowSize'

const techIcons = {
  'Next.js': SiNextdotjs,
  'Express': SiExpress,
  'PostgreSQL': SiPostgresql,
  'GitHub Actions': SiGithubactions,
  'Whisper': SiOpenai,
}

const techColors = {
  'Next.js': '#F5F5F5',
  'Express': '#B3B3B3',
  'PostgreSQL': '#336791',
  'GitHub Actions': '#F5F5F5',
  'Whisper': '#412991',
}

const projects = [
  {
    title: 'goha.et',
    tagline: 'A live tracker of the Ethiopian AI ecosystem — companies, tools, researchers, and initiatives, updating automatically.',
    image: '/goha.png',
    url: 'https://goha.et',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'GitHub Actions'],
  },
  {
    title: 'voiET',
    tagline: 'A production-ready waitlist for Amharic voice AI — speech recognition, transcription, and diarization for users overlooked by mainstream speech tech.',
    image: '/voiet.png',
    url: 'https://voiet.tech',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'Whisper'],
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
          <div
            key={project.title}
            className={`reveal ${i > 0 ? `d${i}` : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{
              width: '100%',
              aspectRatio: '16 / 9',
              overflow: 'hidden',
              flexShrink: 0,
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
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: 'var(--title)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    lineHeight: 1.2,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {project.title}
                  <Globe size={12} strokeWidth={1.5} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
                </a>
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
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '0.35rem',
              }}>
                {project.stack.map(tech => {
                  const Icon = techIcons[tech]
                  const color = techColors[tech]
                  return Icon ? (
                    <span
                      key={tech}
                      title={tech}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      <Icon style={{ color, width: '14px', height: '14px' }} />
                    </span>
                  ) : (
                    <span key={tech} style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.06em',
                      color: 'var(--text-3)',
                    }}>
                      {tech}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
