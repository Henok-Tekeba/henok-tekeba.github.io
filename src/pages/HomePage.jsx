import PageLayout from '../components/PageLayout'
import useReveal from '../hooks/useReveal'
import Hero from '../components/Hero'
import GitHubCommitGraph from '../components/GitHubCommitGraph'
import About from '../components/About'
import Projects from '../components/Projects'
import FeaturedProjects from '../components/FeaturedProjects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../content/articles'

export default function HomePage() {
  useReveal()
  const publishedArticles = articles.filter(a => a.status.toLowerCase() === 'published')

  return (
    <PageLayout>
      <Hero />
      <GitHubCommitGraph />
      <About />
      <Projects />

      <FeaturedProjects />

      <Skills />

      <section id="articles" className="section-body">
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
      <Contact />

      <Footer />
    </PageLayout>
  )
}