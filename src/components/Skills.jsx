import useScrollReveal from '../hooks/useScrollReveal'

const categories = [
  {
    title: 'Frontend',
    tags: ['ReactJS', 'Redux', 'JavaScript (ES6+)', 'CSS / SCSS', 'HTML5', 'Responsive Design'],
  },
  {
    title: 'Backend',
    tags: ['Ruby on Rails', 'Java', 'Python', 'REST APIs'],
  },
  {
    title: 'Bases de datos',
    tags: ['MariaDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'DevOps & Workflow',
    tags: ['Git', 'GitHub', 'Code Review', 'Agile / Scrum'],
  },
  {
    title: 'Liderazgo',
    tags: ['Tech Lead', 'Mentoring', 'Arquitectura escalable', 'Estándares de calidad'],
  },
  {
    title: 'Idiomas',
    tags: ['Español — Nativo', 'Inglés — B2'],
  },
]

function SkillCard({ cat, delay }) {
  const ref = useScrollReveal(delay)

  return (
    <div className="skill-category" ref={ref}>
      <div className="skill-cat-title">{cat.title}</div>
      <div className="skill-tags">
        {cat.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-label">Tecnologías</div>
        <h2 className="section-title">
          Stack &amp;<br />herramientas
        </h2>
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} delay={(i % 4) * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
