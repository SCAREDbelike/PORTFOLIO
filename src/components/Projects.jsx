import { PROJECTS } from '../data/portfolio.js';

function Projects() {
  return (
    <section className="projects section" id="proyectos" aria-labelledby="projects-title">
      <div className="section-heading reveal">
        <div className="section-index">02 / PROYECTOS</div>
        <h2 id="projects-title">Ideas llevadas a código.</h2>
        <p>Proyectos académicos y personales donde aplico lógica, diseño de interfaces, validaciones y herramientas reales de desarrollo.</p>
      </div>
      <div className="row g-4 project-grid">
        {PROJECTS.map((project) => (
          <div className="col-12 col-lg-6 reveal" key={project.id}>
            <article className={`project-tile h-100 ${project.featured ? 'project-featured' : ''}`}>
              <div className="project-top d-flex align-items-start justify-content-between gap-3">
                <span className="project-number">{project.number} / 04</span>
                <span className="project-category">{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-details">{project.details}</p>
              <ul className="project-highlights">
                {project.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="project-bottom">
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => <span className="project-tech badge" key={tech}>{tech}</span>)}
                </div>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-repo-link" aria-label={`Ver repositorio ${project.title} en GitHub`}>
                  Explorar código en GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
