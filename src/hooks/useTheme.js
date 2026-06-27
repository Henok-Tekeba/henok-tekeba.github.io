import { useEffect, useState } from 'react'

const THEME_BG = { dark: '#0a0a0a', light: '#ffffff' }

function readInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  localStorage.setItem('theme', 'dark')
  return 'dark'
}

function resolveBg(theme) {
  if (typeof document === 'undefined') return THEME_BG[theme]
  const prev = document.documentElement.getAttribute('data-theme')
  document.documentElement.setAttribute('data-theme', theme)
  const bg = getComputedStyle(document.documentElement).backgroundColor
  if (prev) {
    document.documentElement.setAttribute('data-theme', prev)
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
  return bg && bg !== 'rgba(0, 0, 0, 0)' ? bg : THEME_BG[theme]
}

function playThemeCurtain(currentTheme, nextTheme) {
  if (typeof document === 'undefined') return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const fromColor = resolveBg(currentTheme)
  const toColor = resolveBg(nextTheme)

  if (reduceMotion) {
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme)
    return
  }

  const downCurtain = document.createElement('div')
  downCurtain.className = 'theme-curtain theme-curtain--down'
  downCurtain.style.background = fromColor
  downCurtain.style.transform = 'translateY(-100%)'
  document.body.appendChild(downCurtain)

  const downAnim = downCurtain.animate(
    [
      { transform: 'translateY(-100%)' },
      { transform: 'translateY(0)' },
    ],
    { duration: 320, easing: 'cubic-bezier(.7,.0,.3,1)', fill: 'forwards' }
  )

  downAnim.onfinish = () => {
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme)

    const upCurtain = document.createElement('div')
    upCurtain.className = 'theme-curtain theme-curtain--up'
    upCurtain.style.background = toColor
    document.body.appendChild(upCurtain)

    const upAnim = upCurtain.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' },
      ],
      { duration: 420, easing: 'cubic-bezier(.7,.0,.3,1)', fill: 'forwards' }
    )

    upAnim.onfinish = () => {
      if (downCurtain.parentNode) document.body.removeChild(downCurtain)
      if (upCurtain.parentNode) document.body.removeChild(upCurtain)
    }
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setThemeState(prev => {
      const next = prev === 'dark' ? 'light' : 'dark'
      playThemeCurtain(prev, next)
      return next
    })
  }

  return { theme, toggleTheme }
}
