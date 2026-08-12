import { stats } from '../data/stats'
import './Stats.css'

/** Tarjeta blanca de indicadores que solapa la parte baja del Hero. */
function Stats() {
  return (
    <section className="stats" aria-label="Pixel Academy en cifras">
      <div className="container">
        <ul className="stats__card reveal">
          {stats.map(({ id, value, label, icon: Icon }, index) => (
            <li key={id} className="stats__item" style={{ '--reveal-delay': `${index * 70}ms` }}>
              <span className="stats__icon" aria-hidden="true">
                <Icon size={26} strokeWidth={1.7} />
              </span>
              <span className="stats__text">
                <strong className="stats__value">{value}</strong>
                <span className="stats__label">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Stats
