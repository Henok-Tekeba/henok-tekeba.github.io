import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Menu, Sun, Send, FileText } from 'lucide-react'
import { MailSolidIcon } from '../components/icons'
import { useTheme } from '../hooks/useTheme'
import useReveal from '../hooks/useReveal'
import { articles } from '../content/articles'
import './replica.css'

const rotatingSubheadlines = ['21', 'Engineer', 'Full stack dev']

const projects = [
  {
    title: 'goha.et',
    desc: 'A live tracker of the Ethiopian AI ecosystem: companies, tools, researchers, and initiatives, updating automatically.',
    image: '/goha.png',
    href: 'https://goha.et',
  },
  {
    title: 'voiET',
    desc: 'A production ready waitlist for Amharic voice AI: speech recognition, transcription, and diarization for users overlooked by mainstream speech tech.',
    image: '/voiet.png',
    href: 'https://voiet.tech',
  },
  {
    title: 'Telegram Opportunity Digest',
    desc: 'A Telegram pipeline that scrapes, summarizes, and delivers opportunities every day. Runs on its own with zero maintenance.',
    icon: Send,
  },
]

export default function ReplicaPage() {
  useReveal()
  const { theme, toggleTheme } = useTheme()
  const [subIndex, setSubIndex] = useState(0)
  const [isSubVisible, setIsSubVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSubVisible(false)
      setTimeout(() => {
        setSubIndex(prev => (prev + 1) % rotatingSubheadlines.length)
        setIsSubVisible(true)
      }, 220)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

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
                <p
                  className="r-role"
                  style={{
                    opacity: isSubVisible ? 1 : 0,
                    transform: isSubVisible ? 'translateY(0)' : 'translateY(4px)',
                    transition: 'opacity 0.22s ease, transform 0.22s ease',
                  }}
                >
                  {rotatingSubheadlines[subIndex]}
                </p>
              </div>
            </div>

            <p className="r-p">
              I'm a founding engineer at{' '}
              <a href="https://voiet.tech" target="_blank" rel="noopener noreferrer" className="r-link">
                <span>voiET</span>
              </a>
              , where we're building Amharic voice AI for users overlooked by mainstream speech tech.
            </p>

            <p className="r-p">
              Earlier, I started solo. I designed and shipped goha.et, a live ecosystem tracker, in one day, and built a Telegram pipeline that delivers opportunities daily with zero maintenance.
            </p>

            <p className="r-p">
              I own my philosophy{' '}
              <Link to="/about" className="r-link">
                <span>Build useful things</span>
              </Link>{' '}
              and an{' '}
              <a href="https://github.com/Henok-Tekeba" target="_blank" rel="noopener noreferrer" className="r-link">
                <span>Opportunity Digest</span>
              </a>.
            </p>

            <p className="r-p">
              You can reach me at{' '}
              <a href="https://x.com/HenaTeke" target="_blank" rel="noopener noreferrer" className="r-link">
                <span>@HenaTeke</span>
              </a>{' '}
              and via{' '}
              <a href="mailto:tekebahenok6@gmail.com" className="r-link">
                <MailSolidIcon width={16} height={16} />
                <span>email</span>
              </a>{' '}
              or{' '}
              <a href="https://www.linkedin.com/in/henok-ayele-6ab58b356" target="_blank" rel="noopener noreferrer" className="r-link">
                <span>LinkedIn</span>
              </a>
            </p>

            <p className="r-p">
              See my live projects on{' '}
              <a href="https://goha.et" target="_blank" rel="noopener noreferrer" className="r-link">
                <span>goha.et</span>
              </a>{' '}
              and open source codes on{' '}
              <a href="https://github.com/Henok-Tekeba" target="_blank" rel="noopener noreferrer" className="r-link">
                <span>GitHub</span>
              </a>
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
                    {project.image
                      ? <img src={project.image} alt="" width="64" height="64" loading="lazy" />
                      : <project.icon width={24} height={24} strokeWidth={1.5} />}
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
                  <FileText width={24} height={24} strokeWidth={1.5} />
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
