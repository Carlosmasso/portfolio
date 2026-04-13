import useScrollReveal from '../hooks/useScrollReveal'
import SectionHeader from './SectionHeader'

const stats = [
  { num: '6+', desc: 'years of experience' },
  { num: '3', desc: 'companies' },
  { num: '∞', desc: 'components' },
  { num: '1', desc: 'passion for code' },
]

export default function About() {
  const textRef = useScrollReveal(0)
  const statsRef = useScrollReveal(120)

  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text reveal" ref={textRef}>
            <SectionHeader
              label="about.md"
              title={<>Developer with<br className="about-br" /> product vision</>}
            />
            <p>
              I am a <strong>Full Stack Developer</strong> based in Madrid,
              with over 6 years of experience building web applications from
              start to finish. I am passionate about both user experience and
              the robustness of the code behind it.
            </p>
            <p>
              Currently at <strong>Allfunds</strong> as Senior Frontend
              Lead, leading teams and setting the quality standard in scalable
              architecture. Pragmatic approach: deliver, iterate, and improve.
            </p>
            <p>
              English <strong>B2</strong> — comfortable in international
              environments and distributed teams.
            </p>
          </div>

          <div className="about-stats reveal" ref={statsRef}>
            {stats.map((s) => (
              <div className="stat-card" key={s.num}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
