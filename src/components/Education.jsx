import useScrollReveal from '../hooks/useScrollReveal'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education">
      <div className="section-inner">
        <div className="section-label">Formación</div>
        <h2 className="section-title">Educación</h2>
        <div className="edu-card" ref={ref}>
          <div>
            <div className="edu-period">2014 — 2019</div>
            <div className="edu-degree">Grado en Ingeniería Informática</div>
            <div className="edu-project">
              Proyecto Fin de Grado:{' '}
              <strong>Diseño e implementación de un algoritmo de enrutamiento</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
