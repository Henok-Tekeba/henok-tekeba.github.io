import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FileText, Monitor } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MailSolidIcon } from '../components/icons'
import useReveal from '../hooks/useReveal'
import PageLayout from '../components/PageLayout'
import { articles } from '../content/articles'
import { projects } from '../content/projects'
import './home.css'

function ComputerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <defs>
        <linearGradient id="r-pc-screen" x1="5" y1="6" x2="19" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c9a86a" />
          <stop offset="1" stopColor="#7a5c33" />
        </linearGradient>
      </defs>
      <rect x="2.75" y="3.75" width="18.5" height="12.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="5" y="6" width="14" height="8" rx="1" fill="url(#r-pc-screen)" />
      <path d="M9.5 8 7.5 10l2 2" stroke="#f5f5f4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 8l2 2-2 2" stroke="#f5f5f4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 7.5l-2 5" stroke="#f5f5f4" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 16.25v3.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 20.75h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}


export default function HomePage() {
  useReveal()
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 15000)
    return () => clearInterval(timer)
  }, [])

  return (
    <PageLayout>
        {/* ── ABOUT / HERO ── */}
        <section className="r-section">
          <div className="r-hero reveal">
            <span className="r-computer-tile">
              <ComputerIcon width={30} height={30} />
            </span>
            <div className="r-id">
              <h1 className="r-name">Henok Tekeba</h1>
              <p className="r-role">Engineer</p>
            </div>

            <p className="r-p">
              I design and ship full stack systems end to end, comfortable moving between backend logic, data pipelines, and the interface on top. I care more about whether it survives real use than whether it looks good in a demo.
            </p>

            <p className="r-p">
              Grab my{' '}
              <a href="/resume.html" target="_blank" rel="noreferrer" className="r-link">
                <FileText width={16} height={16} strokeWidth={1.5} />
                <span>resume</span>
              </a>{' '}
              or reach me via{' '}
              <a href="mailto:tekebahenok6@gmail.com" className="r-link">
                <MailSolidIcon width={16} height={16} />
                <span>email</span>
              </a>
              ,{' '}
              <a href="https://github.com/Henok-Tekeba" target="_blank" rel="noopener noreferrer" className="r-link">
                <FaGithub width={16} height={16} />
                <span>GitHub</span>
              </a>{' '}
              or{' '}
              <a href="https://www.linkedin.com/in/henok-ayele-6ab58b356" target="_blank" rel="noopener noreferrer" className="r-link">
                <FaLinkedinIn width={16} height={16} />
                <span>LinkedIn</span>
              </a>.
            </p>

            <p className="r-p">
              I'm looking for internships and teams building products that need technical curiosity, speed, and attention to detail.
            </p>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="r-projects" className="r-section">
          <h2 className="r-h2">Projects</h2>
          <div className="r-rows reveal">
            {projects.map(project => (
              <Link key={project.slug} to={`/projects/${project.slug}`} className="r-row items-top">
                <span className="r-tile">
                  <img className="r-tile-icon" src={project.icon} alt="" width="24" height="24" loading="lazy" />
                </span>
                <span className="r-row-body">
                  <h3 className="r-row-title">{project.name}</h3>
                  <span className="r-row-desc">{project.tagline}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── ARTICLES ── */}
        <section id="r-articles" className="r-section">
          <h2 className="r-h2">Articles</h2>
          <div className="r-rows reveal">
            {articles.map(article => (
              <Link key={article.slug} to={`/articles/${article.slug}`} className="r-row items-top">
                <span className="r-tile">
                  <img className="r-tile-icon" src="/icons/article.svg" alt="" width="24" height="24" loading="lazy" />
                </span>
                <span className="r-row-body">
                  <h3 className="r-row-title">{article.title}</h3>
                  <span className="r-row-desc">{article.excerpt}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="r-footer">
          <p className="r-footer-updated">
            <span className="r-faint">Local time</span>
            <time className="r-muted">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
          </p>
          <nav className="r-footer-nav" aria-label="More pages">
            <Link to="/about">About</Link>
            <Link to="/articles">Articles</Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </nav>
          <p className="r-muted">© Henok Tekeba <span>{time.getFullYear()}</span> - All rights reserved</p>
        </footer>
    </PageLayout>
  )
}
