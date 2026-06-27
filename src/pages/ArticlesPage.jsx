import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import useWindowSize from '../hooks/useWindowSize'
import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer'
import { articles } from '../content/articles'
import PageLayout from '../components/PageLayout'
import { useArticleSEO } from '../components/SEO'

export default function ArticlesPage() {
  useReveal()
  const width = useWindowSize()
  const isMobile = width < 768

  useArticleSEO(null)

  return (
    <PageLayout>
      <main style={{
        padding: isMobile ? '3rem 0 3rem' : '4rem 0 4rem',
      }}>
        <div className="section-heading reveal">
          <h1 className="section-heading-title">Articles</h1>
          <div className="section-heading-rule" />
        </div>

        <p
          className="reveal d1"
          style={{
            maxWidth: '700px',
            marginBottom: '2rem',
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '0.95rem',
            color: 'var(--text-2)',
            lineHeight: 1.8,
          }}
        >
          I am documenting my journey with practical notes on product building, AI work, and student engineering.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
            gap: '1rem',
          }}
        >
          {articles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              delayClass={index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'}
            />
          ))}
        </div>
      </main>

      <Footer />
    </PageLayout>
  )
}
