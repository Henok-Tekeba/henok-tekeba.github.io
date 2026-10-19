import { FaGithub } from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import { MailSolidIcon } from './icons'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="contact-title reveal">Get in touch.</h2>

      <p className="contact-text reveal d1">
        I'm looking for internships and teams building products that need technical curiosity, speed, and attention to detail.
      </p>

      <p className="hero-reach reveal d2">
        Find me on{' '}
        <a className="hero-link" href="https://github.com/Henok-Tekeba" target="_blank" rel="noreferrer" title="GitHub">
          <FaGithub size={16} />
          <span>GitHub</span>
        </a>
        ,{' '}
        <a className="hero-link" href="https://x.com/HenaTeke" target="_blank" rel="noreferrer" title="X">
          <SiX size={14} />
          <span>X</span>
        </a>{' '}
        or{' '}
        <a className="hero-link" href="mailto:tekebahenok6@gmail.com" title="Email">
          <MailSolidIcon size={16} />
          <span>email</span>
        </a>.
      </p>
    </section>
  )
}
