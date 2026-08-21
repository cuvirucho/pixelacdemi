import { useCallback, useState } from 'react'
import { marcas } from '../data/marcas'
import { useMediaQuery } from '../hooks/useMediaQuery'
import './BrandMarquee.css'

/* Debe coincidir con el `@media (max-width: 640px)` de BrandMarquee.css: ese
   bloque agranda los logos contando con que solo hay una fila. Si los dos
   puntos de corte se desincronizan quedan dos filas de logos gigantes y la
   tarjeta se desborda. */
const MOBILE_QUERY = '(max-width: 640px)'

/**
 * Prepara el logo en Cloudinary antes de servirlo:
 *
 * - `e_trim` recorta el margen uniforme. Los originales son lienzos de
 *   1080x1350 con el logo pequeño en el centro y mucho blanco alrededor; sin
 *   recortar, el navegador ajusta el lienzo entero y la marca queda diminuta.
 *   Esto es lo que más se nota: el logo pasa a ocupar toda la altura de la fila.
 * - `f_auto,q_auto` sirve WebP/AVIF: los PNG originales pesan ~238 kB cada uno
 *   para pintarse a menos de 60px.
 * - `h_160` cubre esa altura a ~2,7x de densidad de píxel.
 *
 * Si el src no es de Cloudinary, `replace` no encuentra nada y lo deja intacto.
 */
const logoSrc = (src) =>
  src.replace(
    '/image/upload/',
    '/image/upload/e_trim/f_auto,q_auto,c_limit,h_160/',
  )

/**
 * Carrusel infinito de logos, en CSS puro.
 *
 * Cada fila lleva su pista duplicada en dos grupos hermanos: el desplazamiento
 * del keyframe es exactamente `un grupo + un gap`, de modo que el bucle empalma
 * sin salto (con un solo grupo y `translateX(-50%)` quedaría medio gap suelto).
 * El grupo clonado va con `aria-hidden` para no repetir las marcas en el
 * lector de pantalla.
 *
 * @param {{id: string, name: string, src: string}[]} items
 * @param {number} rows        Nº de filas; las impares se mueven en sentido inverso.
 * @param {number} rowsMobile  Nº de filas por debajo de MOBILE_QUERY. En una
 *                             ventana de ~286px dos filas obligan a logos
 *                             diminutos: con una sola caben al doble de tamaño.
 * @param {number} duration    Segundos por vuelta completa.
 */
function BrandMarquee({
  items = marcas,
  rows = 2,
  rowsMobile = 1,
  duration = 28,
  label = 'Marcas con las que hemos trabajado',
  className = '',
}) {
  const isMobile = useMediaQuery(MOBILE_QUERY)
  const activeRows = Math.max(1, isMobile ? rowsMobile : rows)

  // Un logo que no carga (src caído en Cloudinary) no desaparece solo: se queda
  // como un hueco vacío de ~120px en mitad de la fila. Al descartarlo, las
  // filas se reparten de nuevo y el carrusel sigue entero.
  const [brokenIds, setBrokenIds] = useState(() => new Set())
  const markBroken = useCallback((id) => {
    setBrokenIds((prev) => (prev.has(id) ? prev : new Set(prev).add(id)))
  }, [])

  const classes = ['brand-marquee', className].filter(Boolean).join(' ')

  const visibles = items.filter(({ id }) => !brokenIds.has(id))

  // Reparto alterno por índice: con un total impar las filas quedan igual de
  // llenas, en lugar de dejar la última casi vacía.
  const lanes = Array.from({ length: activeRows }, (_, lane) =>
    visibles.filter((_item, index) => index % activeRows === lane),
  ).filter((lane) => lane.length > 0)

  if (lanes.length === 0) return null

  return (
    <div className={classes}>
      {label && <p className="brand-marquee__label">{label}</p>}

      <div className="brand-marquee__rows">
        {lanes.map((lane, laneIndex) => (
          <div
            key={`lane-${laneIndex}`}
            className="brand-marquee__row"
            data-direction={laneIndex % 2 === 1 ? 'reverse' : 'forward'}
          >
            <div
              className="brand-marquee__track"
              style={{ '--marquee-duration': `${duration}s` }}
            >
              <ul className="brand-marquee__group">
                {lane.map(({ id, name, src }) => (
                  <li key={id} className="brand-marquee__item">
                    <img
                      className="brand-marquee__logo"
                      src={logoSrc(src)}
                      alt={name}
                      loading="lazy"
                      decoding="async"
                      onError={() => markBroken(id)}
                    />
                  </li>
                ))}
              </ul>

              <ul
                className="brand-marquee__group brand-marquee__group--clone"
                aria-hidden="true"
              >
                {lane.map(({ id, src }) => (
                  <li key={`clone-${id}`} className="brand-marquee__item">
                    <img
                      className="brand-marquee__logo"
                      src={logoSrc(src)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      onError={() => markBroken(id)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandMarquee
