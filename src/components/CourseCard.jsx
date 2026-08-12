import { Clock, ArrowRight } from 'lucide-react'
import { ENROLL_HREF } from '../data/navigation'
import './CourseCard.css'

/**
 * Tarjeta de curso. Recibe un elemento del catálogo de `src/data/courses.js`.
 */
function CourseCard({ course, index = 0 }) {
  const { title, description, duration, level, icon: Icon } = course

  return (
    <article className="course-card reveal" style={{ '--reveal-delay': `${index * 90}ms` }}>
      <header className="course-card__head">
        <span className="course-card__icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.9} />
        </span>
        <div className="course-card__heading">
          {/* El nivel va junto a la etiqueta y no en el pie: así el pie mide
              siempre lo mismo y los divisores de las 4 tarjetas se alinean */}
          <span className="course-card__labels">
            <span className="course-card__tag">Curso</span>
            <span className="course-card__level">{level}</span>
          </span>
          <h3 className="course-card__title">{title}</h3>
        </div>
      </header>

      <p className="course-card__text">{description}</p>

      <footer className="course-card__foot">
        <span className="course-card__meta">
          <Clock size={15} aria-hidden="true" />
          Duración: {duration}
        </span>
      </footer>

      <a className="course-card__link" href={ENROLL_HREF}>
        {/* El texto accesible nombra el curso: "Ver curso" a secas se repetiría 4 veces */}
        <span aria-hidden="true">Ver curso</span>
        <span className="course-card__sr">Ver el curso {title}</span>
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </article>
  )
}

export default CourseCard
