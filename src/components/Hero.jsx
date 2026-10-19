import { useEffect, useState } from 'react'
import { FileText } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiGithub } from 'react-icons/si'

const rotatingSubheadlines = ['21', 'Engineer', 'Full stack dev']

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
          <img className="hero-avatar" src="/profile.jpg" alt="Henok Tekeba" />
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
          I design and ship full stack systems end to end, comfortable moving between backend
          logic, data pipelines, and the interface on top. I care more about whether it survives
          real use than whether it looks good in a demo.
        </p>

        <p className="hero-reach reveal d2">
          Grab my{' '}
          <a className="hero-link" href="/resume.pdf" target="_blank" rel="noreferrer" title="View resume">
            <FileText size={15} strokeWidth={1.5} /> <span>resume</span>
          </a>
          , or reach me via{' '}
          <a className="hero-link" href="mailto:tekebahenok6@gmail.com" title="Email">
            <MdEmail size={16} /> <span>email</span>
          </a>
          ,{' '}
          <a className="hero-link" href="https://github.com/Henok-Tekeba" target="_blank" rel="noreferrer" title="GitHub">
            <SiGithub size={15} /> <span>GitHub</span>
          </a>{' '}
          or{' '}
          <a className="hero-link" href="https://www.linkedin.com/in/henok-ayele-6ab58b356" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedinIn size={15} /> <span>LinkedIn</span>
          </a>.
        </p>
      </div>
    </section>
  )
}
