import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import BrandMarquee from "./BrandMarquee";
import { pillars } from "../data/benefits";
import "./About.css";

function About() {
  return (
    <section id="nosotros" className="about section">
      <div className="container about__inner">
        {/* Composición visual */}
        <div className="about__visual reveal">
          <span className="about__blob" aria-hidden="true" />
          <BrandMarquee className="about__marquee" />
          <div className="about__badge">
            <span className="about__badge-icon" aria-hidden="true">
              <Sparkles size={18} strokeWidth={2} />
            </span>
            <span className="about__badge-text">
              <strong>+4 años</strong>
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
            subtitle="Creamos un espacio para impulsar tu desarrollo personal, descubrir nuevas habilidades y convertir lo que aprendes en algo que realmente transforma tu vida."
            className="about__heading"
          />

          <ul className="about__pillars">
            {pillars.map(({ id, title, description, icon: Icon }, index) => (
              <li
                key={id}
                className="about__pillar reveal"
                style={{ "--reveal-delay": `${index * 100}ms` }}
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
  );
}

export default About;
