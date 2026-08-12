import Logo from './Logo'
import { footerColumns, socialLinks, contactInfo } from '../data/navigation'
import './Footer.css'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer__inner">
        {/* Marca */}
        <div className="footer__brand">
          <Logo href={null} />
          <p className="footer__about">
            Formamos expertos en marketing digital con estrategias actuales y aplicables al mundo
            real.
          </p>
          <ul className="footer__social">
            {socialLinks.map(({ id, label, href, icon: Icon }) => (
              <li key={id}>
                <a
                  className="footer__social-link"
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Pixel Academy en ${label}`}
                >
                  <Icon size={17} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columnas de enlaces */}
        {footerColumns.map((column) => (
          <nav key={column.id} className="footer__column" aria-label={column.title}>
            <h2 className="footer__title">{column.title}</h2>
            <ul className="footer__links">
              {column.links.map((link) => (
                <li key={link.id}>
                  <a className="footer__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contacto */}
        <div className="footer__column">
          <h2 className="footer__title">Contacto</h2>
          <ul className="footer__links">
            {contactInfo.map(({ id, label, href, icon: Icon }) => (
              <li key={id} className="footer__contact">
                <Icon size={15} aria-hidden="true" />
                {href ? (
                  <a className="footer__link" href={href}>
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <p>© {currentYear} Pixel Academy. Todos los derechos reservados.</p>
          <p className="footer__legal">
            <a className="footer__link" href="#inscripcion">
              Términos
            </a>
            <span aria-hidden="true">·</span>
            <a className="footer__link" href="#inscripcion">
              Privacidad
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
