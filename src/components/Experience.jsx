import useScrollReveal from '../hooks/useScrollReveal'
import SectionHeader from './SectionHeader'

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

function TimelineItem({ job, delay, isActive }) {
  const ref = useScrollReveal(delay)

  return (
    <div className={`timeline-item${isActive ? ' timeline-item--active' : ''}`} ref={ref}>
      <div className="timeline-dot" />
      <div className="timeline-card">
        <div className="timeline-header">
          <div className="timeline-meta">
            <span className="timeline-period">
              {isActive && <span className="timeline-badge" />}
              {job.period}
            </span>
            <div className="timeline-company">{job.company}</div>
            <div className="timeline-role">{job.role}</div>
          </div>
        </div>
        <ul className="timeline-points">
          {job.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <SectionHeader label="Trayectoria" title={<>Experiencia<br />profesional</>} />
        <div className="timeline">
          {jobs.map((job, i) => (
            <TimelineItem key={job.company} job={job} delay={i * 100} isActive={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
