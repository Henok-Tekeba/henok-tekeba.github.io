import { LinkIcon } from './icons'

const projects = [
  {
    title: 'goha.et',
    tagline: 'A live tracker of the Ethiopian AI ecosystem: companies, tools, researchers, and initiatives, updating automatically.',
    image: '/goha.png',
    url: 'https://goha.et',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'GitHub Actions'],
  },
  {
    title: 'voiET',
    tagline: 'A production ready waitlist for Amharic voice AI: speech recognition, transcription, and diarization for users overlooked by mainstream speech tech.',
    image: '/voiet.png',
    url: 'https://voiet.tech',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'Whisper'],
  },
]

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="section">
      <div className="section-heading reveal">
        <h2 className="section-heading-title">Featured Projects</h2>
      </div>

      <div className="rows reveal d1">
        {projects.map(project => (
          <a
            key={project.title}
            className="row"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="row-tile">
              <img src={project.image} alt="" width="64" height="64" loading="lazy" />
            </span>
            <span className="row-body">
              <h3 className="row-title">
                {project.title}
                <LinkIcon size={14} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
              </h3>
              <span className="row-desc">{project.tagline}</span>
              <span className="row-meta">{project.stack.join(' · ')}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
