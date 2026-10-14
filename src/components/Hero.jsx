import { useEffect, useState } from 'react';
import { SOCIAL } from '../data/portfolio.js';

const phrases = [
  'backend · android · ux/ui',
  'ideas → productos útiles',
  'aprender · construir · mejorar',
];

function Hero() {
  const [typedText, setTypedText] = useState(phrases[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let phraseIndex = 0;
    let characterIndex = phrases[0].length;
    let deleting = true;
    let timer;
    const typeLoop = () => {
      const phrase = phrases[phraseIndex];
      if (deleting) {
        characterIndex -= 1;
        setTypedText(phrase.slice(0, characterIndex));
        if (characterIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timer = window.setTimeout(typeLoop, 420);
          return;
        }
      } else {
        characterIndex += 1;
        setTypedText(phrases[phraseIndex].slice(0, characterIndex));
        if (characterIndex === phrases[phraseIndex].length) {
          deleting = true;
          timer = window.setTimeout(typeLoop, 1800);
          return;
        }
      }
      timer = window.setTimeout(typeLoop, deleting ? 45 : 70);
    };
    timer = window.setTimeout(typeLoop, 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy reveal">
        <div className="availability"><span /> Desarrollo de software · Perú</div>
        <p className="eyebrow">Hola, soy Guillermo Pereyra</p>
        <h1 id="hero-title">Código que funciona. <em>Experiencias que importan.</em></h1>
        <p className="hero-description">
          Estudiante de Desarrollo de Software en SENATI. Desarrollo aplicaciones Android, proyectos web y soluciones de backend, combinando lógica, atención al detalle y fundamentos de diseño UX/UI.
        </p>
        <div className="hero-actions d-flex flex-wrap gap-3">
          <a className="btn button button-primary" href="#proyectos">Explorar proyectos <span aria-hidden="true">↘</span></a>
          <a className="btn button button-ghost" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">Mi LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-meta d-flex flex-wrap gap-2" aria-label="Áreas de especialización">
          <span>Backend</span><span>Android</span><span>React</span><span>UX/UI</span>
        </div>
      </div>

      <div className="hero-visual reveal" aria-label="Presentación profesional en estilo de terminal">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="profile-card">
          <div className="terminal-bar"><span /><span /><span /><small>guillermo.dev</small></div>
          <div className="terminal-content">
            <p><span className="prompt">$</span> whoami</p>
            <div className="identity">
              <img src="https://avatars.githubusercontent.com/u/198695737?v=4" alt="Avatar de Guillermo en GitHub" />
              <div><strong>Guillermo</strong><span>Software Developer</span></div>
            </div>
            <p><span className="prompt">$</span> focus --current</p>
            <div className="code-output" aria-live="off">{typedText}<span className="terminal-caret" aria-hidden="true">▍</span></div>
            <p><span className="prompt">$</span> location</p>
            <div className="code-output">Lima, Perú <span aria-hidden="true">⌁</span></div>
          </div>
        </div>
        <div className="floating-tag tag-java">JAVA</div>
        <div className="floating-tag tag-api">REACT</div>
        <div className="floating-tag tag-ai">UX/UI</div>
      </div>
      <div className="scroll-cue" aria-hidden="true"><span /> SCROLL</div>
    </section>
  );
}

export default Hero;
