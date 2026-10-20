import { Link } from 'react-router-dom'

export default function ArticleCard({ article, delayClass = '' }) {
  const isPublished = article.status.toLowerCase() === 'published'

  const body = (
    <>
      <span className="r-tile">
        <img className="r-tile-icon" src="/icons/article.svg" alt="" width="24" height="24" loading="lazy" />
      </span>
      <span className="r-row-body">
        <h3 className="r-row-title">{article.title}</h3>
        <span className="r-row-desc">{article.excerpt}</span>
        <span className="r-meta">{article.date} · {article.status}</span>
      </span>
    </>
  )

  if (!isPublished) {
    return (
      <article className={`r-row reveal ${delayClass}`.trim()}>
        {body}
      </article>
    )
  }

  return (
    <Link
      to={`/articles/${article.slug}`}
      className={`r-row reveal ${delayClass}`.trim()}
    >
      {body}
    </Link>
  )
}
