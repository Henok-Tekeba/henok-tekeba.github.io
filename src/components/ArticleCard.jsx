import { Link } from 'react-router-dom'

export default function ArticleCard({ article, delayClass = '' }) {
  const isPublished = article.status.toLowerCase() === 'published'

  return (
    <article
      className={`reveal ${delayClass}`.trim()}
      style={{
        display: 'grid',
        gap: '0.9rem',
        padding: '1.35rem',
        border: '1px solid var(--border)',
        borderRadius: '0.75rem',
        background: 'color-mix(in srgb, var(--bg-2) 92%, transparent)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.1em',
          lineHeight: 1.5,
          color: 'var(--accent)',
          textTransform: 'uppercase',
        }}
      >
        {article.date}
      </span>

      <h3
        style={{
          fontFamily: 'var(--title)',
          fontSize: '1rem',
          fontWeight: 'var(--display-weight-reg)',
          color: 'var(--text)',
          lineHeight: 1.4,
        }}
      >
        {article.title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 'var(--display-weight-light)',
          fontSize: '0.98rem',
          color: 'var(--text-2)',
          lineHeight: 1.7,
        }}
      >
        {article.excerpt}
      </p>

      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.1em',
          lineHeight: 1.5,
          textTransform: 'uppercase',
          color: 'var(--text-3)',
        }}
      >
        {article.status}
      </span>

      {isPublished && (
        <Link
          to={`/articles/${article.slug}`}
          style={{
            fontFamily: 'var(--mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.1em',
          lineHeight: 1.5,
          textTransform: 'uppercase',
          color: 'var(--accent)',
            textDecoration: 'none',
            width: 'fit-content',
          }}
        >
          Read article {'->'}
        </Link>
      )}
    </article>
  )
}
