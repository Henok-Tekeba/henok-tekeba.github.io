import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../hooks/useTheme'

const DOWN_MS = 320
const UP_MS = 420

export default function ThemeCurtain() {
  const { theme } = useTheme()
  const [runId, setRunId] = useState(0)
  const [phase, setPhase] = useState('idle')
  const [fromTheme, setFromTheme] = useState(theme)
  const [toTheme, setToTheme] = useState(theme)
  const lastThemeRef = useRef(theme)
  const timersRef = useRef([])

  useEffect(() => {
    if (theme === lastThemeRef.current) return
    const from = lastThemeRef.current
    lastThemeRef.current = theme
    setFromTheme(from)
    setToTheme(theme)
    setRunId(id => id + 1)
    setPhase('down')
  }, [theme])

  useEffect(() => {
    if (runId === 0) return
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    const t1 = setTimeout(() => setPhase('up'), DOWN_MS)
    const t2 = setTimeout(() => setPhase('idle'), DOWN_MS + UP_MS)
    timersRef.current.push(t1, t2)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [runId])

  useEffect(() => () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  useEffect(() => {
    if (phase === 'idle') return
    document.body.classList.add('theme-curtain-active')
    return () => document.body.classList.remove('theme-curtain-active')
  }, [phase])

  if (phase === 'idle') return null

  return (
    <>
      <div
        key={`down-${runId}`}
        aria-hidden
        className={`theme-curtain theme-curtain--down ${phase === 'down' ? 'is-playing' : ''}`}
        style={{
          background: `var(--curtain-${fromTheme})`,
          animationDuration: `${DOWN_MS}ms`,
        }}
      />
      <div
        key={`up-${runId}`}
        aria-hidden
        className={`theme-curtain theme-curtain--up ${phase === 'up' ? 'is-playing' : ''}`}
        style={{
          background: `var(--curtain-${toTheme})`,
          animationDuration: `${UP_MS}ms`,
        }}
      />
    </>
  )
}
