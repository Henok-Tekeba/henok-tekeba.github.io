import { Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MailSolidIcon, MapPinIcon, UniversityIcon } from '../components/icons'
import useReveal from '../hooks/useReveal'
import Footer from '../components/Footer'
import PageLayout from '../components/PageLayout'

const facts = [
  { label: 'Location', value: 'Addis Ababa, Ethiopia', Icon: MapPinIcon },
  { label: 'University', value: 'Addis Ababa University', Icon: UniversityIcon },
  { label: 'Looking for', value: 'Internships & full stack roles', Icon: Sparkles },
]

export default function AboutPage() {
  useReveal()

  return (
    <PageLayout>
      <section className="section">
        <div className="section-heading reveal">
          <h1 className="section-heading-title">About</h1>
        </div>

        <div className="about-intro reveal d1">
          <p className="page-intro">
            I build full stack web products and backend systems for users who are usually treated as edge cases by the mainstream market.
          </p>

          <p className="page-intro">
            My work spans frontend, backend, and infrastructure: web apps, APIs, databases, and the unglamorous work of turning ideas into deployed products people actually use. I'm currently studying at Addis Ababa University and building full stack products that serve Ethiopian users.
          </p>

          <p className="page-intro">
            The thread through everything is local usefulness. Building software that respects Ethiopian realities instead of assuming Silicon Valley defaults. My recent work includes building a full stack Voice AI platform with real time streaming via Server Sent Events, audio chunking pipelines deployed on Modal, and a Telegram opportunity bot that scrapes and summarizes opportunities daily.
          </p>
        </div>

        <div className="about-facts reveal d2">
          {facts.map(({ label, value, Icon }) => (
            <div key={label} className="about-fact">
              <Icon size={16} strokeWidth={1.5} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
              <div>
                <div className="about-fact-label">{label}</div>
                <div className="about-fact-value">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="hero-reach reveal d2">
          You can reach me via{' '}
          <a className="hero-link" href="mailto:tekebahenok6@gmail.com" title="Email">
            <MailSolidIcon size={16} />
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

        <div className="about-outro reveal d3">
          <p className="page-intro">
            I'm looking for internship and full stack development opportunities where I can contribute to real products, work with experienced engineers, and keep building. If you're working on something interesting or just want to connect,{' '}
            <a className="hero-link" href="mailto:tekebahenok6@gmail.com">
              <span>reach out</span>
            </a>.
          </p>
        </div>
      </section>

      <Footer />
    </PageLayout>
  )
}
