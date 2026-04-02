import './index.css'
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

  return (
    <div>
      <ParticleCanvas />
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