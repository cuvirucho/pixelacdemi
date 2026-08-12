import { useId } from 'react'
import './Logo.css'

/**
 * Identidad de Pixel Academy: la "X" de PIXEL dibujada con píxeles,
 * el mismo motivo que usa el favicon.
 *
 * @param {'md'|'sm'} size
 * @param {string}    href  destino del enlace; si es null renderiza un <span>
 */
function Logo({ size = 'md', href = '#inicio', className = '' }) {
  // useId evita que colisionen los ids de gradiente al haber varios logos
  // en la misma página (navbar y footer).
  const gradientId = useId()
  const classes = ['logo', `logo--${size}`, className].filter(Boolean).join(' ')

  const mark = (
    <>
      <span className="logo__word">
        PI
        <svg className="logo__x" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9B4DFF" />
              <stop offset="100%" stopColor="#6D20FF" />
            </linearGradient>
          </defs>
          <g fill={`url(#${gradientId})`}>
            <rect x="0" y="0" width="5" height="5" rx="1.2" />
            <rect x="13" y="0" width="5" height="5" rx="1.2" />
            <rect x="6.5" y="6.5" width="5" height="5" rx="1.2" />
            <rect x="0" y="13" width="5" height="5" rx="1.2" />
            <rect x="13" y="13" width="5" height="5" rx="1.2" />
          </g>
        </svg>
        EL
      </span>
      <span className="logo__sub">Academy</span>
    </>
  )

  if (!href) {
    return <span className={classes}>{mark}</span>
  }

  return (
    <a href={href} className={classes} aria-label="Pixel Academy, ir al inicio">
      {mark}
    </a>
  )
}

export default Logo
