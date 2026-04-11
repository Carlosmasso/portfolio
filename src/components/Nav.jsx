import { useState, useEffect } from 'react'

export default function Nav() {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : '')
    if (!next) document.documentElement.removeAttribute('data-theme')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
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
              className={`theme-toggle${isDark ? ' dark' : ''}`}
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
        </div>
      </nav>

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
