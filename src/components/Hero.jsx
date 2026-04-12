import TypingText from './TypingText'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow" />
      <div className="hero-inner">
        <div className="hero-tag">
          <span className="comment">{'// '}</span>
          <span className="keyword">const </span>
          <span className="string">role</span>
          <span className="comment"> = </span>
          <span className="string">"Software Engineer"</span>
        </div>
        <h1 className="hero-name">
          Carlos <span className="accent">Massó</span>
        </h1>
        <p className="hero-desc">
          <TypingText
            text="Desarrollador Full Stack especializado en React y Ruby, enfocado en la creación de aplicaciones web escalables, eficientes y bien estructuradas, con especial atención a la calidad del código y las buenas prácticas."
            speed={25}
            delay={800}
          />
        </p>
        <div className="hero-ctas">
          <a href="#experience" className="btn btn-primary">$ ver_experiencia</a>
          <a href="#contact" className="btn btn-outline">$ contactar →</a>
        </div>
      </div>
    </section>
  )
}
