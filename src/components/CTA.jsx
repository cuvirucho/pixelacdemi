import { ArrowRight } from 'lucide-react'
import Button from './Button'
import Figure from './Figure'
import { images } from '../data/images'
import { ENROLL_HREF } from '../data/navigation'
import './CTA.css'

function CTA() {
  // La foto recortada del estudiante se apoya en el borde inferior del panel.
  // Sin foto real no se dibuja un placeholder: sobre el gradiente morado
  // desentonaría, y el panel se reequilibra solo a dos columnas.
  const hasPhoto = Boolean(images.ctaStudent)

  return (
    <section className="cta section" aria-labelledby="cta-title">
      <div className="container">
        <div className={`cta__panel reveal${hasPhoto ? ' cta__panel--with-photo' : ''}`}>
          {/* Decoración del panel */}
          <span className="cta__glow" aria-hidden="true" />
          <span className="cta__dots" aria-hidden="true" />

          {hasPhoto && (
            <Figure
              src={images.ctaStudent}
              alt="Estudiante de Pixel Academy con su portátil"
              variant="student"
              className="cta__figure"
            />
          )}

          <div className="cta__content">
            <h2 id="cta-title" className="cta__title">
              Invierte en ti, transforma tu futuro
            </h2>
            <p className="cta__text">
              Únete a Pixel Academy y comienza hoy tu camino en el mundo digital.
            </p>
            <Button href={ENROLL_HREF} variant="light" size="lg" icon={ArrowRight}>
              Inscríbete ahora
            </Button>
          </div>

          <div className="cta__price">
            <span className="cta__price-label">Desde</span>
            <strong className="cta__price-value">$199</strong>
            <span className="cta__price-note">Pago único</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
