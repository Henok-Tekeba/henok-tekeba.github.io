import useWindowSize from '../hooks/useWindowSize'

const experience = [
  {
    period: '2024 – Present',
    role: 'Founder & Full-Stack Engineer',
    company: 'voiET — Amharic Voice AI Platform',
    highlights: [
      'Built and shipped a full-stack voice AI platform end to end: Next.js frontend, Express REST API, PostgreSQL database, deployed across Vercel, Railway, and Modal Labs',
      'Implemented JWT authentication, Server-Sent Events for real-time streaming responses, and parallel audio chunking using Modal\'s starmap for high-throughput inference',
      'Fine-tuned OpenAI Whisper Medium on 38K+ Amharic audio samples (Google WAXAL dataset) for low-resource language ASR',
      'Converted fine-tuned model to ONNX format for optimized CPU inference; reduced latency for serverless cold-start environments',
      'Built and deployed a production diarization + ASR pipeline using pyannote and faster-whisper on Modal, delivering annotated and timestamped output for a paid transcription contract (~30,000 audio chunks)',
    ],
  },
  {
    period: '2024',
    role: 'Full-Stack Engineer',
    company: 'goha.et — Ethiopian AI Ecosystem Tracker',
    highlights: [
      'Designed and shipped a full-stack product from zero to production in a single day: Next.js + Express, automated GitHub Actions cron job for live data updates, deployed on Vercel and Render',
      'Architected a living data pipeline that continuously tracks and surfaces the Ethiopian AI ecosystem without manual intervention',
    ],
  },
  {
    period: '2024',
    role: 'Automation Engineer',
    company: 'Personal — Telegram Opportunity Digest',
    highlights: [
      'Built an automated Telegram channel pipeline using Telethon + Groq (llama-3.3-70b-versatile) to scrape, summarize, and deliver curated opportunities',
      'Deployed via GitHub Actions cron; zero-maintenance system running continuously in production',
    ],
  },
]

export default function Projects() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="experience" style={{
      padding: isMobile ? '5rem 1.5rem' : '8rem 3rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div className="section-heading reveal">
        <h2 className="section-heading-title">Experience</h2>
        <div className="section-heading-rule" />
      </div>

      <div className="experience-list">
        {experience.map((entry, i) => (
          <div
            key={i}
            className={`experience-entry reveal ${i > 0 ? `d${i}` : ''}`}
          >
            <div className="experience-period">
              <span className="experience-period-line" />
              <span>{entry.period}</span>
            </div>

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