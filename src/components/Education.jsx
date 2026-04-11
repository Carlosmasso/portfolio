import useScrollReveal from '../hooks/useScrollReveal'
import SectionHeader from './SectionHeader'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education">
      <div className="section-inner">
        <SectionHeader label="credentials" title="Educación" />
        <div className="edu-card" ref={ref}>
          <div>
            <div className="edu-period">2014 — 2019</div>
            <div className="edu-degree">Grado en Ingeniería Informática</div>
            <div className="edu-project">
              TFG:{' '}
              <strong>Diseño e implementación de un algoritmo de enrutamiento</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
