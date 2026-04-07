import useScrollReveal from '../hooks/useScrollReveal'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Awayna',
    description:
      'Plataforma de viajes enfocada en el turismo local y cercano. Conecta a los viajeros con experiencias auténticas y destinos próximos, poniendo en valor el turismo de proximidad.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://www.awayna.es/',
  },
  {
    title: 'Portfolio personal',
    description:
      'Este mismo portfolio. Diseñado y desarrollado desde cero con React + Vite, enfocado en rendimiento, animaciones sutiles y una estética minimalista.',
    tags: ['React', 'Vite', 'CSS'],
    link: null,
  },
]

function ProjectCard({ project, delay }) {
  const ref = useScrollReveal(delay)

  return (
    <div className="project-card" ref={ref}>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="skill-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Ver proyecto →
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <SectionHeader label="Trabajo" title="Proyectos" />
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
