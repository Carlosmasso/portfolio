/**
 * SectionHeader — patrón reutilizable label + título para todas las secciones.
 * @param {string}    label   - Texto de la etiqueta superior (ej: "Sobre mí")
 * @param {ReactNode} title   - Título principal, admite JSX (<br />, <em>, etc.)
 * @param {boolean}   center  - Centra la etiqueta (uso en sección Contact)
 */
export default function SectionHeader({ label, title, center = false }) {
  return (
    <>
      <div className={`section-label${center ? ' section-label--center' : ''}`}>
        {label}
      </div>
      <h2 className="section-title">{title}</h2>
    </>
  )
}
