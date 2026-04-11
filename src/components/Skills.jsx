import useScrollReveal from '../hooks/useScrollReveal'
import SectionHeader from './SectionHeader'

const categories = [
  {
    title: 'Frontend',
    tags: ['ReactJS', 'Redux', 'JavaScript', 'CSS/SCSS', 'HTML5', 'Responsive'],
  },
  {
    title: 'Backend',
    tags: ['Ruby on Rails', 'Java', 'Python', 'REST APIs'],
  },
  {
    title: 'Databases',
    tags: ['MariaDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'DevOps',
    tags: ['Git', 'GitHub', 'Code Review', 'Agile/Scrum'],
  },
  {
    title: 'Leadership',
    tags: ['Tech Lead', 'Mentoring', 'Arquitectura', 'Quality Standards'],
  },
  {
    title: 'Languages',
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
        <SectionHeader label="package.json" title={<>Stack &amp;<br />herramientas</>} />
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} delay={(i % 3) * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
