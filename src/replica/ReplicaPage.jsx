import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Moon, Menu, Sun, Send, FileText, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import {
  SiPython, SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiPytorch, SiHuggingface,
  SiGooglecolab, SiGit, SiGithub, SiBun, SiFigma,
} from 'react-icons/si'
import { MailSolidIcon, MapPinIcon, UniversityIcon } from '../components/icons'
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
    meta: 'Next.js · Express · PostgreSQL · GitHub Actions',
  },
  {
    title: 'voiET',
    desc: 'A production ready waitlist for Amharic voice AI: speech recognition, transcription, and diarization for users overlooked by mainstream speech tech.',
    image: '/voiet.png',
    href: 'https://voiet.tech',
    meta: 'Next.js · Express · PostgreSQL · Whisper',
  },
  {
    title: 'Telegram Opportunity Digest',
    desc: 'A Telegram pipeline that scrapes, summarizes, and delivers opportunities every day. Runs on its own with zero maintenance.',
    icon: Send,
    meta: 'Automation · Zero maintenance',
  },
]

const experience = [
  {
    period: '2024 to Present',
    role: 'Founder & Full Stack Engineer',
    company: 'voiET Voice AI Platform',
    highlights: [
      'Shipped a full stack voice AI platform end to end, from Next.js frontend to PostgreSQL database to production deploy',
      'Added login, live response streaming, and parallel audio processing for fast inference',
      'Delivered a paid contract transcribing 30,000 audio chunks in production',
    ],
  },
  {
    period: '2024',
    role: 'Full Stack Engineer',
    company: 'goha.et Ecosystem Tracker',
    highlights: [
      'Designed and shipped a live ecosystem tracker in one day, with automatic daily data updates',
    ],
  },
  {
    period: '2024',
    role: 'Automation Engineer',
    company: 'Telegram Opportunity Digest',
    highlights: [
      'Built a Telegram pipeline that scrapes, summarizes, and delivers opportunities every day',
      'Runs on its own with zero maintenance',
    ],
  },
]

const skills = [
  { key: 'python', Icon: SiPython, color: '#3776AB' },
  { key: 'typescript', Icon: SiTypescript, color: '#3178C6' },
  { key: 'javascript', Icon: SiJavascript, color: '#F7DF1E' },
  { key: 'react', Icon: SiReact, color: '#61DAFB' },
  { key: 'nextjs', Icon: SiNextdotjs, color: 'currentColor' },
  { key: 'tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
  { key: 'nodejs', Icon: SiNodedotjs, color: '#339933' },
  { key: 'express', Icon: SiExpress, color: 'currentColor' },
  { key: 'postgres', Icon: SiPostgresql, color: '#336791' },
  { key: 'pytorch', Icon: SiPytorch, color: '#EE4C2C' },
  { key: 'huggingface', Icon: SiHuggingface, color: '#FFD21E' },
  { key: 'colab', Icon: SiGooglecolab, color: '#F9AB00' },
  { key: 'git', Icon: SiGit, color: '#F05032' },
  { key: 'github', Icon: SiGithub, color: 'currentColor' },
  { key: 'bun', Icon: SiBun, color: 'currentColor' },
  { key: 'figma', Icon: SiFigma, color: '#F24E1E' },
]

const facts = [
  { label: 'Location', value: 'Addis Ababa, Ethiopia', Icon: MapPinIcon },
  { label: 'University', value: 'Addis Ababa University', Icon: UniversityIcon },
  { label: 'Looking for', value: 'Internships & full stack roles', Icon: Sparkles },
]

export default function ReplicaPage() {
  useReveal()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
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
        {/* ── HERO ── */}
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
              I design and ship full stack systems end to end, comfortable moving between backend logic, data pipelines, and the interface on top. I care more about whether it survives real use than whether it looks good in a demo.
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
                <FaLinkedinIn width={16} height={16} />
                <span>LinkedIn</span>
              </a>
            </p>

            <p className="r-p">
              See my live products on{' '}
              <a href="https://goha.et" target="_blank" rel="noopener noreferrer" className="r-link">
                <span>goha.et</span>
              </a>{' '}
              and{' '}
              <a href="https://voiet.tech" target="_blank" rel="noopener noreferrer" className="r-link">
                <span>voiET</span>
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
                    <span className="r-meta">{project.meta}</span>
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

        {/* ── EXPERIENCE ── */}
        <section id="r-experience" className="r-section">
          <h2 className="r-h2">Experience</h2>
          <div className="r-rows reveal">
            {experience.map(entry => (
              <div key={entry.role} className="r-experience-entry">
                <span className="r-meta">{entry.period}</span>
                <div className="r-experience-content">
                  <h3 className="r-row-title">{entry.role}</h3>
                  <span className="r-role">{entry.company}</span>
                  <ul className="r-highlights">
                    {entry.highlights.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="r-skills" className="r-section">
          <h2 className="r-h2">Skills &amp; Tools</h2>
          <div className="r-skills-row reveal">
            {skills.map(({ key, Icon, color }) => (
              <span key={key} className="r-skill" data-label={key}>
                <Icon style={{ color }} />
              </span>
            ))}
          </div>
        </section>

        {/* ── FACTS ── */}
        <section id="r-facts" className="r-section">
          <h2 className="r-h2">About</h2>
          <div className="r-facts reveal">
            {facts.map(({ label, value, Icon }) => (
              <div key={label} className="r-fact">
                <Icon size={16} strokeWidth={1.5} style={{ color: 'var(--ink-faint)', flexShrink: 0 }} />
                <div>
                  <div className="r-fact-label">{label}</div>
                  <div className="r-fact-value">{value}</div>
                </div>
              </div>
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
                  <FileText width={24} height={24} strokeWidth={1.5} />
                </span>
                <span className="r-row-body">
                  <h3 className="r-row-title">{article.title}</h3>
                  <span className="r-row-desc">{article.excerpt}</span>
                  <span className="r-meta">{article.date} · {article.status}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="r-contact" className="r-section">
          <h2 className="r-h3">Get in touch.</h2>
          <p className="r-p">
            I'm looking for internships and teams building products that need technical curiosity, speed, and attention to detail.
          </p>
          <p className="r-p">
            Find me on{' '}
            <a href="https://github.com/Henok-Tekeba" target="_blank" rel="noopener noreferrer" className="r-link">
              <FaGithub width={16} height={16} />
              <span>GitHub</span>
            </a>
            ,{' '}
            <a href="https://x.com/HenaTeke" target="_blank" rel="noopener noreferrer" className="r-link">
              <SiX width={14} height={14} />
              <span>X</span>
            </a>{' '}
            or{' '}
            <a href="mailto:tekebahenok6@gmail.com" className="r-link">
              <MailSolidIcon width={16} height={16} />
              <span>email</span>
            </a>.
          </p>
        </section>

        {/* ── FOOTER ── */}
        <footer className="r-footer">
          <p className="r-faint">Build useful things</p>
          <nav className="r-footer-nav" aria-label="More pages">
            <Link to="/about">About</Link>
            <Link to="/articles">Articles</Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </nav>
          <p className="r-muted">© <span>2026</span> Henok Tekeba</p>
        </footer>
      </main>

      {/* ── FLOATING UI ── */}
      <div className="r-topnav">
        <button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="r-circle-btn">
          {theme === 'dark' ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
        </button>
        <button type="button" onClick={() => navigate('/')} aria-label="Home" className="r-circle-btn">
          <Menu size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
