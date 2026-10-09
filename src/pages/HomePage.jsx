import PageLayout from '../components/PageLayout'
import useReveal from '../hooks/useReveal'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import FeaturedProjects from '../components/FeaturedProjects'
import Skills from '../components/Skills'
import Currently from '../components/Currently'
import FeaturedCode from '../components/FeaturedCode'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  useReveal()

  return (
    <PageLayout>
      <Hero />

      <FeaturedProjects />

      <Projects />

      <Skills />

      <Currently />

      <FeaturedCode />

      <Contact />

      <Footer />
    </PageLayout>
  )
}
