import { useEffect, useState } from 'react'
import { FileText } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

const rotatingSubheadlines = ['21', 'Engineer', 'Full stack dev']

function MailSolidIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" width={size} height={size} aria-hidden="true" focusable="false" style={{ flexShrink: 0 }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.33333 1.83333C1.05719 1.83333 0.833333 2.05719 0.833333 2.33333V13.6667C0.833333 13.9428 1.05719 14.1667 1.33333 14.1667H14.6667C14.9428 14.1667 15.1667 13.9428 15.1667 13.6667V2.33333C15.1667 2.05719 14.9428 1.83333 14.6667 1.83333H1.33333ZM4.27735 4.91732L3.72265 5.74937L8 8.60093L12.2773 5.74937L11.7227 4.91732L8 7.39907L4.27735 4.91732Z" />
    </svg>
  )
}

export default function Hero() {
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
    <section id="hero">
      <div className="hero-inner">
        <header className="hero-header reveal">
          <img className="hero-avatar" src="/profile.jpg" alt="Henok Tekeba" width="44" height="44" />
          <div>
            <h1 className="hero-name">Henok Tekeba</h1>
            <p
              className="hero-subtitle"
              style={{
                opacity: isSubVisible ? 1 : 0,
                transform: isSubVisible ? 'translateY(0)' : 'translateY(4px)',
                transition: 'opacity 0.22s ease, transform 0.22s ease',
              }}
            >
              {rotatingSubheadlines[subIndex]}
            </p>
          </div>
        </header>

        <p className="hero-bio reveal d1">
          I design and ship full stack systems end to end, comfortable moving between backend logic, data pipelines, and the interface on top. I care more about whether it survives real use than whether it looks good in a demo.
        </p>

        <p className="hero-reach reveal d2">
          Grab my{' '}
          <a className="hero-link" href="/resume.pdf" target="_blank" rel="noreferrer" title="View resume">
            <FileText size={16} strokeWidth={1.5} />
            <span>resume</span>
          </a>
          {' '}or reach me via{' '}
          <a className="hero-link" href="mailto:tekebahenok6@gmail.com" title="Email">
            <MailSolidIcon />
            <span>email</span>
          </a>
          ,{' '}
          <a className="hero-link" href="https://github.com/Henok-Tekeba" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub size={16} />
            <span>GitHub</span>
          </a>{' '}
          or{' '}
          <a className="hero-link" href="https://www.linkedin.com/in/henok-ayele-6ab58b356" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedinIn size={16} />
            <span>LinkedIn</span>
          </a>.
        </p>
      </div>
    </section>
  )
}
