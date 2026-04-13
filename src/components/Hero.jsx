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
            text="Full Stack Developer specialized in React and Ruby, focused on building scalable, efficient, and well-structured web applications, with special attention to code quality and best practices."
            speed={25}
            delay={800}
          />
        </p>
        <div className="hero-ctas">
          <a href="#experience" className="btn btn-primary">$ view_experience</a>
          <a href="#contact" className="btn btn-outline">$ contact →</a>
          <a
            href="/CV_Carlos_Masso.pdf"
            download="CV_Carlos_Masso.pdf"
            className="btn btn-outline"
          >
            ↓ download_cv.pdf
          </a>
        </div>
      </div>
    </section>
  )
}
