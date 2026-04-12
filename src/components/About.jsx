import useScrollReveal from '../hooks/useScrollReveal'
import SectionHeader from './SectionHeader'

const stats = [
  { num: '6+', desc: 'años de experiencia' },
  { num: '3', desc: 'empresas' },
  { num: '∞', desc: 'componentes' },
  { num: '1', desc: 'pasión por el código' },
]

export default function About() {
  const textRef = useScrollReveal(0)
  const statsRef = useScrollReveal(120)

  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text reveal" ref={textRef}>
            <SectionHeader
              label="about.md"
              title={<>Desarrollador con<br className="about-br" /> visión de producto</>}
            />
            <p>
              Soy un <strong>Full Stack Developer</strong> con sede en Madrid,
              con más de 6 años de experiencia construyendo aplicaciones web de
              principio a fin. Me apasiona tanto la experiencia de usuario como
              la solidez del código que hay detrás.
            </p>
            <p>
              Actualmente en <strong>Allfunds</strong> como Senior Frontend
              Lead, liderando equipos y marcando el estándar de calidad en
              arquitectura escalable. Enfoque pragmático: entrego, itero y mejoro.
            </p>
            <p>
              Inglés <strong>B2</strong> — cómodo en entornos internacionales
              y equipos distribuidos.
            </p>
          </div>

          <div className="about-stats reveal" ref={statsRef}>
            {stats.map((s) => (
              <div className="stat-card" key={s.num}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
