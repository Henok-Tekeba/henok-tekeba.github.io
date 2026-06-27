import { useEffect } from 'react'

export function useArticleSEO(article) {
  useEffect(() => {
    if (!article) return
    
    const siteName = 'Henok Tekeba'
    const baseUrl = 'https://henok-tekeba.github.io'
    const fullUrl = `${baseUrl}/articles/${article.slug}`
    const ogImage = `${baseUrl}/heni.png`
    const ogTitle = article.title
    const ogDescription = article.excerpt || 'Building full-stack web products and backend systems for Ethiopian users.'

    const updateMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(property.includes(':') ? 'property' : 'name', property)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    updateMeta('og:title', ogTitle)
    updateMeta('og:description', ogDescription)
    updateMeta('og:type', 'article')
    updateMeta('og:url', fullUrl)
    updateMeta('og:image', ogImage)
    updateMeta('og:site_name', siteName)
    updateMeta('article:published_time', article.date)
    updateMeta('article:author', 'Henok Tekeba')

    updateMeta('twitter:card', 'summary_large_image')
    updateMeta('twitter:title', ogTitle)
    updateMeta('twitter:description', ogDescription)
    updateMeta('twitter:image', ogImage)

    const titleEl = document.querySelector('title')
    if (titleEl) titleEl.textContent = `${ogTitle} | Henok Tekeba`

    const descMeta = document.querySelector('meta[name="description"]')
    if (descMeta) descMeta.setAttribute('content', ogDescription)
  }, [article])

  return null
}