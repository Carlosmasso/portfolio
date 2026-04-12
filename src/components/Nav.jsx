import { useState, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  console.log({menuOpen})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            carlos<span>@</span>dev<span>:</span>~<span>$</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">about</a></li>
            <li><a href="#experience">experience</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#education">education</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
          <div className="nav-actions">
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
          <li><a href="#about" onClick={closeMenu}>about</a></li>
          <li><a href="#experience" onClick={closeMenu}>experience</a></li>
          <li><a href="#skills" onClick={closeMenu}>skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>projects</a></li>
          <li><a href="#education" onClick={closeMenu}>education</a></li>
          <li><a href="#contact" onClick={closeMenu}>contact</a></li>
        </ul>
      </div>
    </>
  )
}
