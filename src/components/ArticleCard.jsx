import { Link } from 'react-router-dom'
import { FileText } from 'lucide-react'

export default function ArticleCard({ article, delayClass = '' }) {
  const isPublished = article.status.toLowerCase() === 'published'

  const body = (
    <>
      <span className="row-tile">
        <FileText size={24} strokeWidth={1.5} />
      </span>
      <span className="row-body">
        <h3 className="row-title">{article.title}</h3>
        <span className="row-desc">{article.excerpt}</span>
        <span className="row-meta">{article.date} · {article.status}</span>
      </span>
    </>
  )

  if (!isPublished) {
    return (
      <article className={`row article-row reveal ${delayClass}`.trim()}>
        {body}
      </article>
    )
  }

  return (
    <Link
      to={`/articles/${article.slug}`}
      className={`row article-row reveal ${delayClass}`.trim()}
    >
      {body}
    </Link>
  )
}
