import { useEffect } from 'react'

function updateMeta(property, content) {
  let meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(property.includes(':') ? 'property' : 'name', property)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function setPageMeta({ title, description, url, type }) {
  const siteName = 'Henok Tekeba'
  const baseUrl = 'https://henok-tekeba.github.io'
  const ogImage = `${baseUrl}/heni.png`
  const fullUrl = `${baseUrl}${url}`

  updateMeta('og:title', title)
  updateMeta('og:description', description)
  updateMeta('og:type', type)
  updateMeta('og:url', fullUrl)
  updateMeta('og:image', ogImage)
  updateMeta('og:site_name', siteName)

  updateMeta('twitter:card', 'summary_large_image')
  updateMeta('twitter:title', title)
  updateMeta('twitter:description', description)
  updateMeta('twitter:image', ogImage)

  const titleEl = document.querySelector('title')
  if (titleEl) titleEl.textContent = `${title} | ${siteName}`

  const descMeta = document.querySelector('meta[name="description"]')
  if (descMeta) descMeta.setAttribute('content', description)
}

export function useArticleSEO(article) {
  useEffect(() => {
    if (!article) return

    setPageMeta({
      title: article.title,
      description: article.excerpt || 'Building full-stack web products and backend systems for Ethiopian users.',
      url: `/articles/${article.slug}`,
      type: 'article',
    })

    updateMeta('article:published_time', article.date)
    updateMeta('article:author', 'Henok Tekeba')
  }, [article])

  return null
}

export function useProjectSEO(project) {
  useEffect(() => {
    if (!project) return

    setPageMeta({
      title: project.name,
      description: project.tagline,
      url: `/projects/${project.slug}`,
      type: 'website',
    })
  }, [project])

  return null
}
