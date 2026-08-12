import './Button.css'

/**
 * Botón base de la landing. Renderiza <a> si recibe `href` y <button> si no,
 * manteniendo exactamente el mismo aspecto en ambos casos.
 *
 * @param {'primary'|'outline'|'light'|'ghost'} variant
 * @param {'md'|'lg'} size
 */
function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {Icon && <Icon className="btn__icon" size={18} aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}

export default Button
