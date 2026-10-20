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
    company: 'Never Miss',
    highlights: [
      'Built a Telegram pipeline that scrapes, summarizes, and delivers opportunities every day',
      'Runs on its own with zero maintenance',
    ],
  },
]

export default function Projects() {
  return (
    <section id="experience" className="section">
      <div className="section-heading reveal">
        <h2 className="section-heading-title">Experience</h2>
      </div>

      <div className="rows reveal d1">
        {experience.map((entry, i) => (
          <div key={i} className="experience-entry">
            <span className="experience-period">{entry.period}</span>

            <div className="experience-content">
              <h3 className="experience-role">{entry.role}</h3>
              <p className="experience-company">{entry.company}</p>
              <ul className="experience-highlights">
                {entry.highlights.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
