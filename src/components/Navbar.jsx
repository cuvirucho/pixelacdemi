import { useCallback, useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { navLinks, ENROLL_HREF } from '../data/navigation'
import { useScrollSpy } from '../hooks/useScrollSpy'
import './Navbar.css'

// Referencia estable: si se creara en cada render, el efecto del scrollspy
// se reengancharía continuamente.
const SECTION_IDS = navLinks.map((link) => link.id)

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  // Fondo con blur en cuanto se despega de la parte superior
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Con el menú abierto: bloquea el scroll de fondo y permite cerrar con Escape
  useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }
    const onResize = () => {
      if (window.innerWidth > 900) closeMenu()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [isMenuOpen, closeMenu])

  return (
    <header className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Logo />

        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`navbar__link${activeId === link.id ? ' is-active' : ''}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <Button href={ENROLL_HREF} className="navbar__cta">
            Inscríbete ahora
          </Button>

          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={`navbar__mobile${isMenuOpen ? ' is-open' : ''}`}
        hidden={!isMenuOpen}
      >
        <nav aria-label="Navegación móvil">
          <ul className="navbar__mobile-list">
            {navLinks.map((link, index) => (
              <li key={link.id} style={{ '--delay': `${index * 45}ms` }}>
                <a
                  href={link.href}
                  className={`navbar__mobile-link${activeId === link.id ? ' is-active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button href={ENROLL_HREF} size="lg" onClick={closeMenu} className="navbar__mobile-cta">
          Inscríbete ahora
        </Button>
      </div>

      {isMenuOpen && (
        <div className="navbar__backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  )
}

export default Navbar
