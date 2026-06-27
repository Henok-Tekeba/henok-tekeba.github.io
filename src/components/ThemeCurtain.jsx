import { useEffect, useState } from 'react'

export default function ThemeCurtain() {
  const [transition, setTransition] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      const detail = e.detail
      if (!detail || !detail.from || !detail.to) return
      if (detail.from === detail.to) return
      setTransition({ from: detail.from, to: detail.to, id: Date.now() })
    }
    window.addEventListener('theme:transition', handler)
    return () => window.removeEventListener('theme:transition', handler)
  }, [])

  useEffect(() => {
    if (!transition) return
    document.body.classList.add('theme-curtain-active')
    const t = setTimeout(() => {
      setTransition(null)
      document.body.classList.remove('theme-curtain-active')
    }, 800)
    return () => {
      clearTimeout(t)
      document.body.classList.remove('theme-curtain-active')
    }
  }, [transition])

  if (!transition) return null

  return (
    <>
      <div
        key={`down-${transition.id}`}
        aria-hidden
        className="theme-curtain theme-curtain--down"
        style={{ background: `var(--curtain-${transition.from})` }}
      />
      <div
        key={`up-${transition.id}`}
        aria-hidden
        className="theme-curtain theme-curtain--up"
        style={{ background: `var(--curtain-${transition.to})`, animationDelay: '320ms' }}
      />
    </>
  )
}
