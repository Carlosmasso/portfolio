/**
 * SectionHeader — terminal-style comment + title for sections.
 */
export default function SectionHeader({ label, title, center = false }) {
  return (
    <>
      <p className={`section-label${center ? ' section-label--center' : ''}`}>
        {label}
      </p>
      <h2 className="section-title">{title}</h2>
    </>
  )
}
