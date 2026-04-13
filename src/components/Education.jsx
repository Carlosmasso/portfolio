import useScrollReveal from '../hooks/useScrollReveal'
import SectionHeader from './SectionHeader'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education">
      <div className="section-inner">
        <SectionHeader label="credentials" title="Education" />
        <div className="edu-card" ref={ref}>
          <div className="edu-body">
            <div className="edu-period">2014 — 2019</div>
            <div className="edu-degree">Bachelor's Degree in Computer Engineering</div>
            <div className="edu-project">
              Final Project:{' '}
              <strong>Design and implementation of a routing algorithm</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
