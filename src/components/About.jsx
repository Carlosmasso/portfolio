import SectionHeader from './SectionHeader'

const stats = [
  { num: '6+', desc: 'Años de experiencia profesional' },
  { num: '3',  desc: 'Empresas de referencia' },
  { num: '∞',  desc: 'Componentes y APIs construidas' },
  { num: '1',  desc: 'Pasión: el código que importa' },
]

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text">
            <SectionHeader
              label="Sobre mí"
              title={<>Desarrollador<br />con visión de producto</>}
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
              arquitectura escalable. Tengo un enfoque pragmático: entrego,
              itero y mejoro.
            </p>
            <p>
              Inglés <strong>B2</strong> — cómodo en entornos internacionales
              y equipos distribuidos.
            </p>
          </div>

          <div className="about-stats">
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
