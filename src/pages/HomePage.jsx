import useReveal from '../hooks/useReveal'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import GitHubCommitGraph from '../components/GitHubCommitGraph'
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
      <Nav />
      <Hero />
      <About />
      <Projects />
      <GitHubCommitGraph />

      <section id="articles" style={{
        padding: '8rem 3rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="section-heading reveal" style={{ marginBottom: '2rem' }}>
          <h2 className="section-heading-title">Latest Writing</h2>
          <div className="section-heading-rule" />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {publishedArticles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} delayClass={`d${i + 1}`} />
          ))}
        </div>
      </section>

      <section id="learning" style={{
        padding: '8rem 3rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="section-heading reveal">
          <h2 className="section-heading-title">Currently Learning</h2>
          <div className="section-heading-rule" />
        </div>
        <div className="reveal d1" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          {['Docker', 'Kubernetes', 'Rust', 'Go', 'System Design', 'MLOps', 'Audio Signal Processing'].map(item => (
            <span key={item} style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-2)',
              border: '1px solid var(--border)',
              padding: '0.5rem 1rem',
              borderRadius: '999px',
            }}>{item}</span>
          ))}
        </div>
      </section>

      <Skills />
      <Contact />

      <section id="testimonials" style={{
        padding: '0 3rem 8rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="section-heading reveal">
          <h2 className="section-heading-title">Testimonials</h2>
          <div className="section-heading-rule" />
        </div>
        <div className="reveal d1" style={{
          display: 'grid',
          gap: '1.5rem',
          maxWidth: '600px',
        }}>
          <p style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '0.95rem',
            color: 'var(--text-2)',
            lineHeight: 1.8,
            fontStyle: 'italic',
            borderLeft: '2px solid var(--accent)',
            paddingLeft: '1.5rem',
          }}>
            "Add a recommendation from a professor, mentor, or teammate to build trust with visitors."
          </p>
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-3)',
          }}>
            — Your name here
          </span>
        </div>
      </section>

      <Footer />
    </div>
  )
}
