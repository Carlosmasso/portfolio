export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow" />
      <div className="hero-inner">
        <div className="hero-tag">Full Stack Developer</div>
        <h1 className="hero-name">
          Carlos <em>Massó</em>
        </h1>
        <p className="hero-desc">
          Construyo productos digitales de alto rendimiento. Especializado en
          arquitecturas frontend modernas con React y backend robusto con
          Ruby on Rails, Java y Python.
        </p>
        <div className="hero-ctas">
          <a href="#experience" className="btn btn-primary">Ver experiencia</a>
          <a href="#contact" className="btn btn-outline">Contactar →</a>
        </div>
      </div>
    </section>
  )
}
