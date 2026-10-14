function About() {
  return (
    <section className="about section" id="sobre-mi" aria-labelledby="about-title">
      <div className="section-index reveal">01 / SOBRE MÍ</div>
      <div className="row gx-lg-5 gy-4 about-row">
        <div className="col-lg-6 reveal">
          <h2 id="about-title">Aprendo construyendo.<br /><span>Mejoro iterando.</span></h2>
          <div className="about-small-label">Curiosidad técnica + criterio de diseño</div>
        </div>
        <div className="col-lg-6 about-copy reveal">
          <p>
            Me formo en Desarrollo de Software en SENATI. Me interesa entender un producto de principio a fin: qué problema resuelve, cómo se organizan sus datos y qué necesita la persona que lo utiliza.
          </p>
          <p>
            He desarrollado aplicaciones Android con Java, interfaces interactivas con React y trabajo en lógica backend. Complemento la programación con aprendizaje de experiencia de usuario, investigación y prototipado de interfaces.
          </p>
          <p>
            Busco seguir creciendo en equipos donde pueda aportar código claro, aprender de otros desarrolladores y construir soluciones que puedan mantenerse y evolucionar.
          </p>
          <div className="about-meta">
            <div><strong>05°</strong><span>Ciclo · SENATI</span></div>
            <div><strong>04</strong><span>Proyectos destacados</span></div>
            <div><strong>UX/UI</strong><span>Formación complementaria</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
