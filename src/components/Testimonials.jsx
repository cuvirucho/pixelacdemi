import { Star, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/testimonials'
import './Testimonials.css'

function Testimonials() {
  return (
    <section id="testimonios" className="testimonials section">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonios"
          title="Historias de alumnos que decidieron crecer"
          subtitle="Personas reales que pasaron de la teoría a los resultados."
        />

        <ul className="testimonials__grid">
          {testimonials.map(({ id, quote, name, course, initials, rating }, index) => (
            <li key={id}>
              <article
                className="testimonial reveal"
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <Quote className="testimonial__quote" size={34} aria-hidden="true" />

                <div className="testimonial__stars" aria-label={`Valoración: ${rating} de 5`}>
                  {Array.from({ length: rating }, (_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="testimonial__text">«{quote}»</blockquote>

                <footer className="testimonial__author">
                  <span className="testimonial__avatar" aria-hidden="true">
                    {initials}
                  </span>
                  <span className="testimonial__meta">
                    <strong className="testimonial__name">{name}</strong>
                    <span className="testimonial__role">{course}</span>
                  </span>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials
