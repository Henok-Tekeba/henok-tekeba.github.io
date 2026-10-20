import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import { LinkIcon } from '../components/icons'
import { getProjectBySlug, projects } from '../content/projects'
import { useProjectSEO } from '../components/SEO'

export default function ProjectDetailPage() {
  useReveal()
  const { slug } = useParams()
  const project = getProjectBySlug(slug || '')
  useProjectSEO(project)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const index = projects.findIndex(p => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <PageLayout>
      <article className="project-detail">
        <header className="project-head reveal">
          <span className="project-icon">
            <img src={project.icon} alt="" width="28" height="28" loading="lazy" />
          </span>
          <div className="project-title-row">
            <h1 className="project-title">{project.name}</h1>
            {project.live && (
              <a
                className="project-live-icon"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit live site"
                title="Visit live site"
              >
                <LinkIcon size={15} />
              </a>
            )}
          </div>
          <p className="project-tagline">{project.tagline}</p>
          <p className="project-meta">
            {project.year} · {project.role}
          </p>
        </header>

        <div className="project-body reveal d1">
          <section className="project-section">
            <h2 className="r-h2">Why I built it</h2>
            {project.why.map((paragraph, i) => (
              <p key={i} className="r-p">{paragraph}</p>
            ))}
          </section>

          <section className="project-section">
            <h2 className="r-h2">The problem it solves</h2>
            {project.problem.map((paragraph, i) => (
              <p key={i} className="r-p">{paragraph}</p>
            ))}
          </section>

          <section className="project-section">
            <h2 className="r-h2">How it works</h2>
            {project.architecture.map((paragraph, i) => (
              <p key={i} className="r-p">{paragraph}</p>
            ))}
          </section>

          {project.decisions && project.decisions.length > 0 && (
            <section className="project-section">
              <h2 className="r-h2">Key decisions</h2>
              <ol className="decision-list">
                {project.decisions.map((decision, i) => (
                  <li key={i} className="decision-item">
                    <span className="decision-num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="decision-body">
                      <h3 className="decision-title">{decision.title}</h3>
                      <p className="decision-detail">{decision.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <section className="project-section">
            <h2 className="r-h2">Tech stack</h2>
            <ul className="stack-chips">
              {project.stack.map(tech => (
                <li key={tech} className="stack-chip">{tech}</li>
              ))}
            </ul>
          </section>

          {project.screenshots.length > 0 && (
            <section className="project-section">
              <h2 className="r-h2">Screenshots</h2>
              <div className="project-shots">
                {project.screenshots.map((src, i) => (
                  <img key={i} src={src} alt={`${project.name} screenshot ${i + 1}`} loading="lazy" />
                ))}
              </div>
            </section>
          )}
        </div>

        <nav className="project-next reveal d2" aria-label="Next project">
          <span className="project-next-label">Next project</span>
          <Link className="project-next-link" to={`/projects/${next.slug}`}>
            <span>{next.name}</span>
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </nav>

        <p className="project-back reveal d2">
          <Link className="r-link" to="/">
            <span>← All projects</span>
          </Link>
        </p>
      </article>

      <Footer />
    </PageLayout>
  )
}
