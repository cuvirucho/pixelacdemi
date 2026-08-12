import SectionHeading from './SectionHeading'
import { inclusions } from '../data/benefits'
import './Benefits.css'

function Benefits() {
  return (
    <section id="beneficios" className="benefits section">
      <div className="container">
        <div className="benefits__panel">
          <div className="benefits__intro">
            <SectionHeading
              align="left"
              eyebrow="¿Qué incluye?"
              title="Todo lo que necesitas para destacar"
            />
            <span className="benefits__rule reveal" aria-hidden="true" />
          </div>

          <ul className="benefits__list">
            {inclusions.map(({ id, title, description, icon: Icon }, index) => (
              <li
                key={id}
                className="benefits__item reveal"
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <span className="benefits__icon" aria-hidden="true">
                  <Icon size={26} strokeWidth={1.6} />
                </span>
                <h3 className="benefits__title">{title}</h3>
                <p className="benefits__text">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Benefits
