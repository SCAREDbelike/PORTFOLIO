import { SOCIAL, UX_COURSES } from '../data/portfolio.js';

function Certificates() {
  return (
    <section className="certificates section" id="certificaciones" aria-labelledby="certificates-title">
      <div className="section-index reveal">04 / CERTIFICACIÓN UX/UI</div>
      <div className="row gy-4 gx-lg-5 mb-5 align-items-end">
        <div className="col-lg-7 reveal">
          <p className="eyebrow">Experiencia de usuario · Diseño de interfaces</p>
          <h2 id="certificates-title">Diseñar pensando en las personas.</h2>
        </div>
        <div className="col-lg-5 reveal">
          <p className="certificate-description">La formación UX/UI conecta investigación, diseño visual y validación con usuarios. Estas son las ocho áreas del programa de Google UX Design publicadas por Coursera, presentadas en español.</p>
        </div>
      </div>
      <div className="certificate-feature reveal">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <span className="certificate-provider">COURSERA / UX + UI</span>
            <h3>Certificación en UX/UI</h3>
            <p>Formación en investigación de usuarios, accesibilidad, diseño centrado en las personas, wireframes, prototipado y diseño de interfaces con Figma.</p>
            <div className="d-flex flex-wrap gap-2 certificate-keywords">
              <span>Diseño UX</span><span>Figma</span><span>UI</span><span>Usabilidad</span><span>Prototipado</span>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-lg-end">
            <a className="btn button button-primary" href={SOCIAL.certificate} target="_blank" rel="noopener noreferrer">Ver credencial oficial <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="course-list-heading d-flex align-items-end justify-content-between flex-wrap gap-3 reveal">
        <div>
          <span className="eyebrow">Contenido formativo</span>
          <h3>8 cursos que integran el programa</h3>
        </div>
        <span className="curriculum-note">Temario de referencia: Google UX Design · Coursera</span>
      </div>
      <div className="row g-3 course-grid">
        {UX_COURSES.map((course) => (
          <div className="col-md-6 col-xl-3 reveal" key={course.number}>
            <article className="course-card h-100">
              <div className="d-flex justify-content-between align-items-start gap-2 mb-4">
                <span className="course-number">{course.number}</span>
                <span className="course-tag">{course.tag}</span>
              </div>
              <h4>{course.name}</h4>
              <p>{course.detail}</p>
            </article>
          </div>
        ))}
      </div>
      <p className="certificate-footnote">Los títulos están resumidos en español a partir del temario actual de Coursera. El enlace de arriba dirige a la credencial compartida; las ocho tarjetas describen cursos del programa, no ocho certificados independientes.</p>
    </section>
  );
}
export default Certificates;
