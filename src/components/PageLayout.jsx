import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function PageLayout({ children }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="home">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        className="r-circle-btn r-theme-btn"
      >
        {theme === 'dark' ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
      </button>

      <main className="r-main">{children}</main>
    </div>
  )
}
