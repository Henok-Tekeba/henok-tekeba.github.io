import { useState, useEffect } from 'react'

export default function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    let timer
    const handler = () => {
      clearTimeout(timer)
      timer = setTimeout(() => setWidth(window.innerWidth), 100)
    }
    window.addEventListener('resize', handler)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handler)
    }
  }, [])

  return width
}