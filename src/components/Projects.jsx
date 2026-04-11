import useScrollReveal from '../hooks/useScrollReveal'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Awayna',
    file: 'awayna.tsx',
    description:
      'Plataforma de viajes enfocada en turismo local y cercano. Conecta viajeros con experiencias auténticas y destinos próximos.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://www.awayna.es/',
  },
  {
    title: 'Portfolio',
    file: 'portfolio.jsx',
    description:
      'Este portfolio. Diseñado y desarrollado desde cero con React + Vite, enfocado en rendimiento y estética developer.',
    tags: ['React', 'Vite', 'CSS'],
    link: null,
  },
]

function ProjectCard({ project, delay }) {
  const ref = useScrollReveal(delay)

  return (
    <div className="project-card" ref={ref}>
      <div className="project-bar">
        <div className="dots">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="title">{project.file}</span>
      </div>
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
        <div className="project-footer">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            open {project.file} →
          </a>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <SectionHeader label="repos" title="Proyectos" />
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
