export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-blob" />
      <div className="hero-bg-blob2" />

      <div className="hero-inner">
        <div className="hero-tag">Full Stack Developer · Madrid</div>
        <h1 className="hero-name">
          Carlos<br /><em>Massó</em>
        </h1>
        <p className="hero-desc">
          Construyo productos digitales de alto rendimiento. Especializado en
          arquitecturas frontend modernas con ReactJS y backend robusto en Ruby
          on Rails, Java y Python. Más de 6 años transformando ideas en
          experiencias que escalan.
        </p>
        <div className="hero-ctas">
          <a href="#experience" className="btn btn-primary">Ver experiencia</a>
          <a href="#contact" className="btn btn-outline">Contactar</a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  )
}
