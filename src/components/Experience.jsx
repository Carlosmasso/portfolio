import useScrollReveal from '../hooks/useScrollReveal'

const jobs = [
  {
    period: 'Abril 2022 — Actualidad',
    company: 'Allfunds',
    role: 'Senior Frontend Lead',
    points: [
      'Liderazgo técnico del equipo frontend: mentoring, code reviews y establecimiento de estándares de calidad.',
      'Diseño de arquitecturas frontend escalables con ReactJS y Redux.',
      'Desarrollo full-stack con Ruby on Rails en backend e integración con APIs REST.',
      'Responsable del ciclo completo del producto web: desde la UI hasta el despliegue en producción.',
      'Optimización de la experiencia de usuario y rendimiento en plataformas de alto tráfico.',
    ],
  },
  {
    period: 'Agosto 2021 — Abril 2022',
    company: 'Capgemini',
    role: 'Full Stack Developer',
    points: [
      'Desarrollo e integración de interfaces frontend en proyectos de cliente.',
      'Implementación de soluciones backend en entornos empresariales.',
    ],
  },
  {
    period: 'Abril 2019 — Agosto 2021',
    company: 'Teldat',
    role: 'Full Stack Developer',
    points: [
      'Diseño de interacciones de usuario y arquitectura frontend completa.',
      'Desarrollo de aplicaciones backend y diseño de APIs RESTful.',
      'Mantenimiento evolutivo y correctivo del sistema de software.',
    ],
  },
]

function TimelineItem({ job, delay }) {
  const ref = useScrollReveal(delay)

  return (
    <div className="timeline-item" ref={ref}>
      <div className="timeline-dot" />
      <div className="timeline-period">{job.period}</div>
      <div className="timeline-company">{job.company}</div>
      <div className="timeline-role">{job.role}</div>
      <ul className="timeline-points">
        {job.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-label">Trayectoria</div>
        <h2 className="section-title">
          Experiencia<br />profesional
        </h2>
        <div className="timeline">
          {jobs.map((job, i) => (
            <TimelineItem key={job.company} job={job} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
