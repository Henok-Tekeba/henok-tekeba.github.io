import { Link } from 'react-router-dom'
import { Moon, Menu, Sun, FileText } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MailSolidIcon } from '../components/icons'
import { useTheme } from '../hooks/useTheme'
import useReveal from '../hooks/useReveal'
import { articles } from '../content/articles'
import './replica.css'

const projects = [
  {
    title: 'goha.et',
    desc: 'A live tracker of the Ethiopian AI ecosystem: companies, tools, researchers, and initiatives, updating automatically.',
    icon: '/replica-icons/xsplit.svg',
    href: 'https://goha.et',
  },
  {
    title: 'voiET',
    desc: 'A production ready waitlist for Amharic voice AI: speech recognition, transcription, and diarization for users overlooked by mainstream speech tech.',
    icon: '/replica-icons/agent-skills.svg',
    href: 'https://voiet.tech',
  },
  {
    title: 'Telegram Opportunity Digest',
    desc: 'A Telegram pipeline that scrapes, summarizes, and delivers opportunities every day. Runs on its own with zero maintenance.',
    icon: '/replica-icons/toolist.svg',
  },
]

export default function ReplicaPage() {
  useReveal()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="replica">
      <main className="r-main">
        {/* ── ABOUT / HERO ── */}
        <section className="r-section">
          <div className="r-hero reveal">
            <div className="r-avatar-row">
              <img className="r-avatar" src="/profile.jpg" alt="Henok Tekeba" width="44" height="44" />
              <div className="r-avatar-col">
                <h1 className="r-name">Henok Tekeba</h1>
                <p className="r-role">Full stack dev</p>
              </div>
            </div>

            <p className="r-p">
              I design and ship full stack systems end to end, comfortable moving between backend logic, data pipelines, and the interface on top. I care more about whether it survives real use than whether it looks good in a demo.
            </p>

            <p className="r-p">
              Grab my{' '}
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="r-link">
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
            {projects.map(project => {
              const body = (
                <>
                  <span className="r-tile">
                    <img className="r-tile-icon" src={project.icon} alt="" width="24" height="24" loading="lazy" />
                  </span>
                  <span className="r-row-body">
                    <h3 className="r-row-title">{project.title}</h3>
                    <span className="r-row-desc">{project.desc}</span>
                  </span>
                </>
              )
              return project.href ? (
                <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="r-row items-top">
                  {body}
                </a>
              ) : (
                <div key={project.title} className="r-row items-top">
                  {body}
                </div>
              )
            })}
          </div>
        </section>

        {/* ── ARTICLES ── */}
        <section id="r-articles" className="r-section">
          <h2 className="r-h2">Articles</h2>
          <div className="r-rows reveal">
            {articles.map(article => (
              <Link key={article.slug} to={`/articles/${article.slug}`} className="r-row items-top">
                <span className="r-tile">
                  <img className="r-tile-icon" src="/replica-icons/article.svg" alt="" width="24" height="24" loading="lazy" />
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
            <span className="r-faint">Last updated on</span>
            <time dateTime="2026-10-19" className="r-muted">Oct 19, 2026</time>
          </p>
          <nav className="r-footer-nav" aria-label="More pages">
            <Link to="/about">About</Link>
            <Link to="/articles">Articles</Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </nav>
          <p className="r-muted">© Henok Tekeba <span>2026</span> - All rights reserved</p>
        </footer>
      </main>

      {/* ── FLOATING UI ── */}
      <div className="r-topnav">
        <button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="r-circle-btn">
          {theme === 'dark' ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
        </button>
        <button type="button" aria-label="Open menu" className="r-circle-btn">
          <Menu size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
