import { Link, Navigate, useParams } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import useWindowSize from '../hooks/useWindowSize'
import Footer from '../components/Footer'
import { getArticleBySlug } from '../content/articles'
import PageLayout from '../components/PageLayout'

export default function ArticleDetailPage() {
  useReveal()
  const width = useWindowSize()
  const isMobile = width < 768
  const { slug } = useParams()
  const article = getArticleBySlug(slug || '')

  if (!article || article.status.toLowerCase() !== 'published') {
    return <Navigate to="/articles" replace />
  }

  return (
    <PageLayout>
      <main style={{
        padding: isMobile ? '3rem 0 3rem' : '4rem 0 4rem',
        maxWidth: '860px',
        margin: '0 auto',
      }}>
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.85rem',
          }}
        >
          {article.date}
        </p>

        <h1
          className="reveal d1"
          style={{
            fontFamily: 'var(--title)',
            fontWeight: 'var(--display-weight-reg)',
            fontSize: isMobile ? 'clamp(1.35rem, 7vw, 2rem)' : 'clamp(1.7rem, 4vw, 2.6rem)',
            lineHeight: 1.2,
            color: 'var(--text)',
            marginBottom: '2rem',
          }}
        >
          {article.title}
        </h1>

        <div style={{ display: 'grid', gap: '1.15rem' }}>
          {article.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`reveal ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'}`}
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 'var(--display-weight-light)',
                fontSize: '0.98rem',
                color: 'var(--text-2)',
                lineHeight: 1.95,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </main>

      <Footer />
    </PageLayout>
  )
}
