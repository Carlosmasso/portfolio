import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact">
      <div className="contact-inner" ref={ref}>
        <div className="section-label" style={{ justifyContent: "center" }}>
          Hablemos
        </div>
        <h2 className="section-title">
          ¿Tienes un proyecto
          <br />
          en mente?
        </h2>
        <p className="contact-sub">
          Estoy abierto a nuevas oportunidades, colaboraciones y proyectos
          interesantes. No dudes en escribirme.
        </p>
        <a
          href="mailto:carlos.masso@hotmail.com"
          className="btn btn-primary"
          style={{ display: "inline-flex" }}
        >
          Enviar email
        </a>
        <div className="contact-links">
          <a href="mailto:carlos.masso@hotmail.com" className="contact-link">
            carlos.masso@hotmail.com
          </a>
          <a href="tel:+34600038657" className="contact-link">
            +34 600-038-657
          </a>
          <a
            href="https://www.linkedin.com/in/carlosmassoarjona"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          <a href="#" className="contact-link">
            Madrid
          </a>
        </div>
      </div>
    </section>
  );
}
