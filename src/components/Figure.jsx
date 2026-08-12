import { useId } from 'react'
import './Figure.css'

/**
 * Muestra una foto real cuando `src` tiene valor y, cuando es null, una
 * ilustración SVG con la paleta de la marca que ocupa el mismo espacio.
 * Así el diseño nunca queda con un hueco roto mientras faltan las fotos.
 *
 * Ver `src/data/images.js` y `src/assets/images/README.md`.
 *
 * @param {'person'|'student'|'team'} variant
 */
function Figure({ src, alt, variant = 'person', className = '' }) {
  const gid = useId()
  const classes = ['figure', `figure--${variant}`, className].filter(Boolean).join(' ')

  if (src) {
    return (
      <div className={classes}>
        <img src={src} alt={alt} className="figure__img" loading="lazy" decoding="async" />
      </div>
    )
  }

  return (
    <div className={`${classes} figure--placeholder`} role="img" aria-label={alt}>
      <svg
        className="figure__art"
        viewBox="0 0 300 360"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={`${gid}-stroke`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C9A3FF" />
            <stop offset="100%" stopColor="#7C2CFF" />
          </linearGradient>
          <linearGradient id={`${gid}-fill`} x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#7C2CFF" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#4B12A8" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <g
          stroke={`url(#${gid}-stroke)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Torso: arranca en y=180, justo donde termina el cuello, para que la
              figura quede encadenada. Se dibuja primero: el portátil lo ocluye. */}
          <path
            d="M64 330C64 252 98 180 150 180C202 180 236 252 236 330Z"
            fill={`url(#${gid}-fill)`}
          />
          {/* Cuello: une la cabeza (termina en y=150) con el torso (empieza en y=180) */}
          <path d="M141 146v36M159 146v36" />
          {/* Cabeza */}
          <circle cx="150" cy="110" r="40" fill={`url(#${gid}-fill)`} />
          {/* Cabello */}
          <path d="M110 108c0-22 18-38 40-38s40 16 40 38c-9-10-22-16-40-16s-31 6-40 16Z" />
          {/* Gafas */}
          <rect x="123" y="106" width="22" height="16" rx="6" />
          <rect x="155" y="106" width="22" height="16" rx="6" />
          <path d="M145 114h10" />

          {variant === 'student' ? (
            <>
              {/* Brazo levantado señalando hacia arriba */}
              <path d="M212 238c20-4 34-20 40-40" />
              <circle cx="258" cy="186" r="13" fill={`url(#${gid}-fill)`} />
              {/* Portátil sujetado con el otro brazo */}
              <path d="M88 240c-18 12-30 32-36 56" />
              <rect x="36" y="296" width="112" height="34" rx="7" fill="#0B0B12" />
              <path d="M58 313h68" strokeOpacity="0.55" />
            </>
          ) : (
            <>
              {/* Portátil abierto: tapa opaca que ocluye el torso, y base en perspectiva */}
              <rect x="92" y="262" width="116" height="50" rx="7" fill="#0B0B12" />
              <path d="M84 312h132l16 22H68l16-22Z" fill="#0B0B12" />
              {/* Marca de píxeles sobre la tapa */}
              <g stroke="none" fill={`url(#${gid}-stroke)`} opacity="0.8">
                <rect x="139" y="273" width="8" height="8" rx="2" />
                <rect x="155" y="273" width="8" height="8" rx="2" />
                <rect x="147" y="283" width="8" height="8" rx="2" />
                <rect x="139" y="293" width="8" height="8" rx="2" />
                <rect x="155" y="293" width="8" height="8" rx="2" />
              </g>
            </>
          )}
        </g>

        {/* Puntos decorativos */}
        <g fill={`url(#${gid}-stroke)`} opacity="0.5">
          <circle cx="44" cy="120" r="4" />
          <circle cx="262" cy="96" r="5" />
          <circle cx="248" cy="322" r="3.5" />
          <circle cx="36" cy="196" r="3" />
        </g>
      </svg>
    </div>
  )
}

export default Figure
