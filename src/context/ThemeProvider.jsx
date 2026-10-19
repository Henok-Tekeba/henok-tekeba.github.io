import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const STORAGE_KEY = 'theme'

function readInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  let saved = null
  try {
    saved = window.localStorage.getItem(STORAGE_KEY)
  } catch (err) {
    void err
  }
  if (saved === 'light' || saved === 'dark') return saved
  return 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#121212' : '#f5f5f4')
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch (err) {
      void err
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
