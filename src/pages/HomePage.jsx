import useReveal from '../hooks/useReveal'
import Hero from '../components/Hero'
import GitHubCommitGraph from '../components/GitHubCommitGraph'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../content/articles'

export default function HomePage() {
  useReveal()
  const publishedArticles = articles.filter(a => a.status.toLowerCase() === 'published')

  return (
    <div className="app-shell">
      <Hero />
      <GitHubCommitGraph />
      <About />
      <Projects />

      <section id="articles">
        <div className="section-heading reveal">
          <h2 className="section-heading-title">Latest Writing</h2>
          <div className="section-heading-rule" />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
        }}>
          {publishedArticles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} delayClass={`d${i + 1}`} />
          ))}
        </div>
      </section>

      <section id="learning">
        <div className="section-heading reveal">
          <h2 className="section-heading-title">Currently Learning</h2>
          <div className="section-heading-rule" />
        </div>
        <div className="reveal d1" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
        }}>
          {['Docker', 'Kubernetes', 'Rust', 'Go', 'System Design', 'Redis', 'PostgreSQL'].map(item => (
            <span key={item} style={{
              fontSize: '0.8rem',
              color: 'var(--text-2)',
              border: '1px solid var(--border)',
              padding: '0.4rem 0.8rem',
              borderRadius: '0.3rem',
              background: 'var(--bg-2)',
            }}>{item}</span>
          ))}
        </div>
      </section>

      <Skills />
      <Contact />

      <section id="testimonials">
        <div className="section-heading reveal">
          <h2 className="section-heading-title">Testimonials</h2>
          <div className="section-heading-rule" />
        </div>
        <div className="reveal d1" style={{ maxWidth: '540px' }}>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-2)',
            lineHeight: 1.7,
            fontStyle: 'italic',
            borderLeft: '2px solid var(--accent)',
            paddingLeft: '1.25rem',
          }}>
            "Add a recommendation from a professor, mentor, or teammate to build trust with visitors."
          </p>
          <span style={{
            fontSize: '0.75rem',
            color: 'var(--text-3)',
            display: 'block',
            marginTop: '0.5rem',
          }}>
            — Your name here
          </span>
        </div>
      </section>

      <Footer />
    </div>
  )
}