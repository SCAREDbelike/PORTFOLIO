import { SOCIAL } from '../data/portfolio.js';

function Contact() {
  return (
    <section className="contact section" id="contacto" aria-labelledby="contact-title">
      <div className="section-index reveal">05 / CONTACTO</div>
      <div className="row align-items-start gx-lg-5 gy-5">
        <div className="col-lg-5 reveal contact-intro">
          <p className="eyebrow">Hablemos de tecnología</p>
          <h2 id="contact-title">¿Tienes una idea? <em>Conversemos.</em></h2>
          <p>Me interesan proyectos, prácticas, colaboración y oportunidades para seguir aprendiendo. Cuéntame qué tienes en mente y podemos conversar.</p>
          <div className="contact-social-links d-flex flex-column gap-3">
            <a href={`mailto:${SOCIAL.email}`}><span>Correo</span><strong>{SOCIAL.email}</strong><b>↗</b></a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"><span>Profesional</span><strong>LinkedIn</strong><b>↗</b></a>
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer"><span>Repositorios</span><strong>GitHub</strong><b>↗</b></a>
          </div>
        </div>
        <div className="col-lg-7 reveal">
          <div className="contact-panel">
            <div className="contact-panel-heading">
              <div><span className="contact-overline">ENVIAR MENSAJE</span><h3>Escríbeme directamente.</h3></div>
              <span className="contact-email">Respondo por correo</span>
            </div>
            {/* FormSubmit: activar una sola vez mediante el correo de confirmación. */}
            <form className="contact-form" action={`https://formsubmit.co/${SOCIAL.email}`} method="POST">
              <input type="hidden" name="_subject" value="Nuevo contacto desde portfolio Guillermo" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-company">No completar</label><input id="contact-company" name="_honey" type="text" tabIndex={-1} autoComplete="off" /></div>
              <div className="row g-3">
                <div className="col-md-6 contact-field">
                  <label className="form-label" htmlFor="contact-name">Tu nombre</label>
                  <input className="form-control" id="contact-name" name="name" type="text" required maxLength={100} placeholder="¿Cómo te llamas?" autoComplete="name" />
                </div>
                <div className="col-md-6 contact-field">
                  <label className="form-label" htmlFor="contact-email">Tu correo</label>
                  <input className="form-control" id="contact-email" name="email" type="email" required maxLength={254} placeholder="tu@email.com" autoComplete="email" />
                </div>
                <div className="col-12 contact-field">
                  <label className="form-label" htmlFor="contact-subject">Asunto</label>
                  <input className="form-control" id="contact-subject" name="asunto" type="text" required maxLength={150} placeholder="Proyecto, consulta, oportunidad..." />
                </div>
                <div className="col-12 contact-field">
                  <label className="form-label" htmlFor="contact-message">Mensaje</label>
                  <textarea className="form-control" id="contact-message" name="message" rows={5} required minLength={10} maxLength={3000} placeholder="Cuéntame un poco más..." />
                </div>
                <div className="col-12 contact-form-bottom">
                  <p>Los mensajes se envían mediante FormSubmit a mi correo. La primera vez es necesario activar la recepción desde el correo de confirmación.</p>
                  <button className="btn button button-primary" type="submit">Enviar mensaje <span aria-hidden="true">↗</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
