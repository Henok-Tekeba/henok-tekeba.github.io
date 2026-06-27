import { useEffect, useRef, useState } from 'react'

const THEME_BG = { dark: '#0a0a0a', light: '#ffffff' }

function resolveThemeBg(theme) {
  if (typeof window === 'undefined') return '#0a0a0a'
  const probe = document.createElement('div')
  probe.setAttribute('data-theme', theme)
  probe.style.position = 'absolute'
  probe.style.visibility = 'hidden'
  probe.style.width = '1px'
  probe.style.height = '1px'
  document.body.appendChild(probe)
  const bg = getComputedStyle(probe).backgroundColor || THEME_BG[theme]
  document.body.removeChild(probe)
  return bg
}

function playThemeCurtain(event, theme) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  const x = event?.clientX
  const y = event?.clientY
  const originX = typeof x === 'number' ? x : window.innerWidth / 2
  const originY = typeof y === 'number' ? y : 24
  const maxDim = Math.max(window.innerWidth, window.innerHeight)
  const finalScale = Math.ceil((maxDim * 2) / 24) + 4

  const curtain = document.createElement('div')
  curtain.className = 'theme-curtain'
  curtain.style.left = `${originX}px`
  curtain.style.top = `${originY}px`
  curtain.style.width = '24px'
  curtain.style.height = '24px'
  curtain.style.background = resolveThemeBg(theme)
  document.body.appendChild(curtain)

  if (typeof curtain.animate !== 'function') {
    document.body.removeChild(curtain)
    return
  }

  const anim = curtain.animate(
    [
      { transform: `translate(-50%, -50%) scale(0)`, opacity: 1 },
      { transform: `translate(-50%, -50%) scale(${finalScale})`, opacity: 1, offset: 0.75 },
      { transform: `translate(-50%, -50%) scale(${finalScale})`, opacity: 0 },
    ],
    { duration: 650, easing: 'cubic-bezier(.7,.0,.3,1)', fill: 'forwards' }
  )

  anim.onfinish = () => {
    if (curtain.parentNode) document.body.removeChild(curtain)
  }
}

function readInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  localStorage.setItem('theme', 'dark')
  return 'dark'
}

export function useTheme() {
  const [theme, setThemeState] = useState(readInitialTheme)
  const themeRef = useRef(theme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = (event) => {
    const next = themeRef.current === 'dark' ? 'light' : 'dark'
    themeRef.current = next
    setThemeState(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
    playThemeCurtain(event, next)
  }

  return { theme, toggleTheme }
}
