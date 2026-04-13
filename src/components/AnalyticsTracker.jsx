import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export default function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return
    }

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_path: location.pathname + location.search,
      page_location: window.location.href,
    })
  }, [location.pathname, location.search])

  return null
}