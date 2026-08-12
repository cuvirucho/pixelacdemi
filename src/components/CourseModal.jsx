import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  Clock,
  MonitorPlay,
  CalendarDays,
  Users,
  Check,
  Rocket,
  ArrowRight,
} from 'lucide-react'
import Button from './Button'
import { inclusions } from '../data/benefits'
import { COURSE_PRICE, COURSE_SEATS, COURSE_START } from '../data/courses'
import './CourseModal.css'

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

/**
 * Ficha ampliada de un curso. Se monta con `createPortal` en el <body> y no
 * dentro de la tarjeta: `.course-card:hover` y `.reveal` aplican `transform`,
 * que crea bloque contenedor y rompería el `position: fixed` del overlay.
 *
 * @param {object} course elemento de `src/data/courses.js`
 * @param {() => void} onClose
 * @param {(courseId: string) => void} onEnroll
 */
function CourseModal({ course, onClose, onEnroll }) {
  const overlayRef = useRef(null)
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const titleId = useId()

  const {
    id,
    title,
    tagline,
    summary,
    audience,
    format,
    duration,
    level,
    modules,
    outcomes,
    tools,
    project,
    icon: Icon,
  } = course

  // Bloquea el scroll de fondo, cierra con Escape y mantiene el foco dentro del
  // diálogo. El bloqueo replica el del menú móvil (Navbar) para no divergir.
  useEffect(() => {
    const opener = document.activeElement

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const focusables = [...dialogRef.current.querySelectorAll(FOCUSABLE)]
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus({ preventScroll: true })

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      // Devuelve el foco al botón "Ver curso" que abrió el modal. `preventScroll`
      // es imprescindible: enfocar arrastra la página hasta el elemento, y al
      // cerrar desde "Reservar mi cupo" eso desharía el salto a Inscripción.
      opener?.focus?.({ preventScroll: true })
    }
  }, [onClose])

  const handleOverlayClick = (event) => {
    // Solo el fondo cierra: un clic dentro del diálogo no debe propagarse
    if (event.target === overlayRef.current) onClose()
  }

  return createPortal(
    <div className="course-modal" ref={overlayRef} onClick={handleOverlayClick}>
      <div
        className="course-modal__dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="course-modal__head">
          <button
            type="button"
            className="course-modal__close"
            onClick={onClose}
            aria-label="Cerrar la ficha del curso"
            ref={closeRef}
          >
            <X size={20} aria-hidden="true" />
          </button>

          <span className="course-modal__icon" aria-hidden="true">
            <Icon size={26} strokeWidth={1.8} />
          </span>

          <span className="course-modal__labels">
            <span className="course-modal__tag">Curso</span>
            <span className="course-modal__level">{level}</span>
          </span>

          <h2 className="course-modal__title" id={titleId}>
            {title}
          </h2>
          <p className="course-modal__tagline">{tagline}</p>

          <ul className="course-modal__meta">
            <li>
              <Clock size={15} aria-hidden="true" />
              {duration}
            </li>
            <li>
              <MonitorPlay size={15} aria-hidden="true" />
              {format}
            </li>
            <li>
              <CalendarDays size={15} aria-hidden="true" />
              {COURSE_START}
            </li>
            <li>
              <Users size={15} aria-hidden="true" />
              {COURSE_SEATS}
            </li>
          </ul>
        </header>

        <div className="course-modal__body">
          <div className="course-modal__main">
            <p className="course-modal__summary">{summary}</p>

            <section className="course-modal__block">
              <h3 className="course-modal__block-title">Lo que aprenderás</h3>
              <ul className="course-modal__outcomes">
                {outcomes.map((outcome) => (
                  <li key={outcome}>
                    <Check size={16} strokeWidth={2.4} aria-hidden="true" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>

            <section className="course-modal__block">
              <h3 className="course-modal__block-title">Programa semana a semana</h3>
              <ol className="course-modal__modules">
                {modules.map((module, index) => (
                  <li key={module.id} className="course-modal__module">
                    <span className="course-modal__module-step" aria-hidden="true">
                      {index + 1}
                    </span>
                    <div className="course-modal__module-body">
                      <span className="course-modal__module-week">{module.week}</span>
                      <h4 className="course-modal__module-title">{module.title}</h4>
                      <p className="course-modal__module-text">{module.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="course-modal__project">
              <span className="course-modal__project-icon" aria-hidden="true">
                <Rocket size={20} strokeWidth={1.9} />
              </span>
              <div>
                <h3 className="course-modal__project-title">Tu proyecto final</h3>
                <p className="course-modal__project-text">{project}</p>
              </div>
            </section>
          </div>

          <aside className="course-modal__aside">
            <div className="course-modal__price-card">
              <span className="course-modal__price-label">Inversión única</span>
              <strong className="course-modal__price">{COURSE_PRICE}</strong>
              <span className="course-modal__price-note">
                Sin mensualidades ni cargos ocultos
              </span>

              <Button
                size="lg"
                icon={ArrowRight}
                className="course-modal__cta"
                onClick={() => onEnroll(id)}
              >
                Reservar mi cupo
              </Button>

              <p className="course-modal__seats">
                <Users size={14} aria-hidden="true" />
                {COURSE_SEATS}
              </p>
            </div>

            {/* Lo que incluye es común a todos los cursos: se reutiliza el
                catálogo de la sección "¿Qué incluye?" en vez de duplicarlo */}
            <div className="course-modal__box">
              <h3 className="course-modal__box-title">Incluye</h3>
              <ul className="course-modal__includes">
                {inclusions.map(({ id: inclusionId, title: name, description, icon: ItemIcon }) => (
                  <li key={inclusionId}>
                    <ItemIcon size={17} strokeWidth={1.8} aria-hidden="true" />
                    <span>
                      <strong>{name}</strong> {description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="course-modal__box">
              <h3 className="course-modal__box-title">Herramientas que dominarás</h3>
              <ul className="course-modal__tools">
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>

            <div className="course-modal__box">
              <h3 className="course-modal__box-title">Para quién es</h3>
              <p className="course-modal__audience">{audience}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default CourseModal
