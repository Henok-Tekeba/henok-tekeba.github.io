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

      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
