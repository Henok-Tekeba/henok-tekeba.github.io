import './index.css'
import { useEffect, useState } from 'react'
import useReveal from './hooks/useReveal'
import ParticleCanvas from './components/ParticleCanvas'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import GitHubCommitGraph from './components/GitHubCommitGraph'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useReveal()
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light')

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setTheme(root.getAttribute('data-theme') || 'light')
    })

    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {theme !== 'dark' && <ParticleCanvas />}
      <Nav />
      <Hero />
      <About />
      <Projects />
      <GitHubCommitGraph />
      <Skills />
      <Contact />
      <Footer />

    </div>
  )
}

export default App