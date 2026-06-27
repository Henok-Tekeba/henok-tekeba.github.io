import { flushSync } from 'react-dom'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const STORAGE_KEY = 'theme'

function readInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  let saved = null
  try {
    saved = window.localStorage.getItem(STORAGE_KEY)
  } catch (err) {
    void err
  }
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch (err) {
      void err
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    const from = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
    const to = from === 'dark' ? 'light' : 'dark'
    window.dispatchEvent(new CustomEvent('theme:transition', { detail: { from, to } }))
    flushSync(() => {
      setTheme(to)
    })
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
