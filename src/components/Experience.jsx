import useScrollReveal from '../hooks/useScrollReveal'
import SectionHeader from './SectionHeader'

const jobs = [
  {
    period: 'April 2022 — Present',
    company: 'Allfunds',
    role: 'Senior Frontend Lead',
    points: [
      'Technical leadership of the frontend team: mentoring, code reviews, and quality standards.',
      'Scalable frontend architectures with ReactJS.',
      'Full-stack development with Ruby on Rails and GraphQL integration.',
      'Full product lifecycle: UI → production deployment.',
      'UX and performance optimization for high-traffic platforms.',
    ],
  },
  {
    period: 'August 2021 — April 2022',
    company: 'Capgemini',
    role: 'Full Stack Developer',
    points: [
      'Frontend interface development and integration for client projects.',
      'Backend solution implementation in enterprise environments.',
    ],
  },
  {
    period: 'April 2019 — August 2021',
    company: 'Teldat',
    role: 'Full Stack Developer',
    points: [
      'User interaction design and complete frontend architecture.',
      'Backend development and RESTful API design.',
      'Evolutionary and corrective maintenance of the software system.',
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
          <span className="timeline-period">
            {isActive && <span className="timeline-badge" />}
            {job.period}
          </span>
          <div className="timeline-company">{job.company}</div>
          <div className="timeline-role">{job.role}</div>
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
        <SectionHeader label="git log" title={<>Professional<br />experience</>} />
        <div className="timeline">
          {jobs.map((job, i) => (
            <TimelineItem key={job.company} job={job} delay={i * 100} isActive={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
