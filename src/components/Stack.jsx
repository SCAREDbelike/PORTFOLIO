const skills = [
  { heading: 'Desarrollo', items: ['Java', 'JavaScript', 'React', 'HTML', 'CSS', 'Vite'] },
  { heading: 'Datos y herramientas', items: ['SQLite', 'Git & GitHub', 'REST APIs', 'Gradle', 'Android Studio'] },
  { heading: 'Diseño de producto', items: ['Figma', 'UX Research', 'Wireframes', 'Prototipos', 'Diseño responsive'] },
];

function Stack() {
  return (
    <section className="stack section" id="stack" aria-labelledby="stack-title">
      <div className="section-index reveal">03 / TECNOLOGÍAS</div>
      <div className="row g-4 align-items-start">
        <div className="col-lg-5 stack-copy reveal">
          <h2 id="stack-title">Herramientas para construir mejor.</h2>
          <p>Desde la estructura de datos hasta la interfaz final, elijo tecnologías según la necesidad de cada proyecto y sigo ampliando mi experiencia.</p>
        </div>
        <div className="col-lg-7 reveal">
          <div className="row g-3">
            {skills.map((group) => (
              <div className="col-sm-6" key={group.heading}>
                <div className="stack-group h-100">
                  <h3>{group.heading}</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {group.items.map((item) => <span className="stack-pill" key={item}>{item}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Stack;
