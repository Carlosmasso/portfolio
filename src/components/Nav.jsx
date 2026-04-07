import { useState } from 'react'

export default function Nav() {
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo">
          CM<span>.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#education">Educación</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="nav-actions">
          <button
            className={`theme-toggle${isDark ? '' : ' light'}`}
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            <span className="toggle-thumb" />
          </button>
          <button
            className={`burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experiencia</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#education" onClick={closeMenu}>Educación</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </div>
    </>
  )
}
