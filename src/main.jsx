import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AnalyticsTracker from './components/AnalyticsTracker'
import { ThemeProvider } from './context/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
