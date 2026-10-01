import useWindowSize from '../hooks/useWindowSize'

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

export default function Projects() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="experience" style={{
      padding: isMobile ? '1.5rem 1.5rem' : '2rem 3rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div className="section-heading reveal">
        <h2 className="section-heading-title">Experience</h2>
      </div>

      <div className="experience-list">
        {experience.map((entry, i) => (
          <div
            key={i}
            className={`experience-entry reveal ${i > 0 ? `d${i}` : ''}`}
          >
            <p className="experience-header">
              <span className="experience-period">{entry.period}</span>
              <span className="experience-dot" aria-hidden="true">·</span>
              <span className="experience-role">{entry.role}</span>
              <span className="experience-dot" aria-hidden="true">·</span>
              <span className="experience-company">{entry.company}</span>
            </p>

            <ul className="experience-highlights">
              {entry.highlights.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
