import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Courses from '../components/Courses'
import About from '../components/About'
import Benefits from '../components/Benefits'
import CTA from '../components/CTA'
import Testimonials from '../components/Testimonials'
import Enroll from '../components/Enroll'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Orquesta el orden de las secciones. El orden del DOM coincide con el del
 * navbar, de modo que el scrollspy funciona sin configuración adicional.
 *
 * Un único observador montado en <main> revela todos los elementos `.reveal`
 * de la página, en lugar de crear uno por sección.
 */
function Home() {
  const revealRoot = useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido" ref={revealRoot}>
        <Hero />
        <Stats />
        <Courses />
        <About />
        <Benefits />
        <CTA />
        <Testimonials />
        <Enroll />
      </main>

      <Footer />
    </>
  )
}

export default Home
