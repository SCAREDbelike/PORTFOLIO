const header = document.querySelector('.site-header');
const glow = document.querySelector('.cursor-glow');
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 3, 2) * 90}ms`;
  observer.observe(element);
});

const output = document.querySelector('#typed-output');
const phrases = ['backend · android · ai', 'ideas → software', 'learning · building · shipping'];
let phraseIndex = 0;
let characterIndex = phrases[0].length;
let deleting = true;

function typeLoop() {
  const phrase = phrases[phraseIndex];
  if (deleting) {
    characterIndex -= 1;
    output.textContent = phrase.slice(0, characterIndex);
    if (characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeLoop, 420);
      return;
    }
  } else {
    characterIndex += 1;
    output.textContent = phrases[phraseIndex].slice(0, characterIndex);
    if (characterIndex === phrases[phraseIndex].length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 70);
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setTimeout(typeLoop, 1800);
}

document.querySelector('#year').textContent = new Date().getFullYear();
