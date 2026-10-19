import useReveal from '../hooks/useReveal'
import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer'
import { articles } from '../content/articles'
import PageLayout from '../components/PageLayout'
import { useArticleSEO } from '../components/SEO'

export default function ArticlesPage() {
  useReveal()

  useArticleSEO(null)

  return (
    <PageLayout>
      <section className="section">
        <div className="section-heading reveal">
          <h1 className="section-heading-title">Articles</h1>
        </div>

        <p className="page-intro reveal d1">
          I am documenting my journey with practical notes on product building, AI work, and student engineering.
        </p>

        <div className="rows reveal d2">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              delayClass={index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'}
            />
          ))}
        </div>
      </section>

      <Footer />
    </PageLayout>
  )
}
