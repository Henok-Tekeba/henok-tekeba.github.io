import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AnalyticsTracker from './components/AnalyticsTracker'

const savedTheme = localStorage.getItem('theme')
const initialTheme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'dark'
document.documentElement.setAttribute('data-theme', initialTheme)
if (!savedTheme) localStorage.setItem('theme', initialTheme)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AnalyticsTracker />
      <App />
    </BrowserRouter>
  </StrictMode>,
)