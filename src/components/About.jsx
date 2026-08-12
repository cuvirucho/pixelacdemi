import { Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Figure from './Figure'
import { pillars } from '../data/benefits'
import { images } from '../data/images'
import './About.css'

function About() {
  return (
    <section id="nosotros" className="about section">
      <div className="container about__inner">
        {/* Composición visual */}
        <div className="about__visual reveal">
          <span className="about__blob" aria-hidden="true" />
          <Figure
            src={images.aboutTeam}
            alt="Equipo docente de Pixel Academy en una sesión de mentoría"
            variant="team"
            className="about__figure"
          />
          <div className="about__badge">
            <span className="about__badge-icon" aria-hidden="true">
              <Sparkles size={18} strokeWidth={2} />
            </span>
            <span className="about__badge-text">
              <strong>+6 años</strong>
              formando talento digital
            </span>
          </div>
        </div>

        {/* Texto y pilares */}
        <div className="about__content">
          <SectionHeading
            align="left"
            eyebrow="Sobre nosotros"
            title="Una academia para aplicar, no solo para aprender"
            subtitle="Nacimos en Cuenca con una idea simple: que nadie termine un curso con apuntes bonitos y sin saber por dónde empezar. Cada módulo se construye alrededor de un entregable real."
            className="about__heading"
          />

          <ul className="about__pillars">
            {pillars.map(({ id, title, description, icon: Icon }, index) => (
              <li
                key={id}
                className="about__pillar reveal"
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <span className="about__pillar-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="about__pillar-title">{title}</h3>
                  <p className="about__pillar-text">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
