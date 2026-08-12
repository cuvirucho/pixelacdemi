import './SectionHeading.css'

/**
 * Encabezado de sección reutilizable (eyebrow + título + subtítulo).
 * Lo usan Courses, About, Benefits, Testimonials y Enroll.
 *
 * @param {'center'|'left'} align
 * @param {'light'|'dark'}  theme  'dark' = sobre fondo oscuro
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) {
  const classes = [
    'section-heading',
    `section-heading--${align}`,
    `section-heading--${theme}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {eyebrow && <span className="eyebrow reveal">{eyebrow}</span>}
      <h2 className="section-heading__title reveal" style={{ '--reveal-delay': '80ms' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="section-heading__subtitle reveal" style={{ '--reveal-delay': '160ms' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
