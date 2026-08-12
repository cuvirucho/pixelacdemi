import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Courses from "../components/Courses";
import About from "../components/About";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";

import Enroll from "../components/Enroll";
import Footer from "../components/Footer";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Orquesta el orden de las secciones. El orden del DOM coincide con el del
 * navbar, de modo que el scrollspy funciona sin configuración adicional.
 *
 * Un único observador montado en <main> revela todos los elementos `.reveal`
 * de la página, en lugar de crear uno por sección.
 */
function Home() {
  const revealRoot = useScrollReveal();

  // Curso que el modal pide preseleccionar en el formulario. El contador
  // `request` hace que reabrir el mismo curso vuelva a aplicar la selección
  // aunque el usuario hubiera cambiado el <select> a mano.
  const [enrollCourse, setEnrollCourse] = useState({ id: "", request: 0 });

  const requestEnroll = (id) =>
    setEnrollCourse((prev) => ({ id, request: prev.request + 1 }));

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido" ref={revealRoot}>
        <Hero />
        <Stats />
        <Courses onEnroll={requestEnroll} />
        <About />
        <Benefits />
        <CTA />

        <Enroll enrollCourse={enrollCourse} />
      </main>

      <Footer />
    </>
  );
}

export default Home;
