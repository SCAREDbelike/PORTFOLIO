import { useEffect } from 'react';

// Sustituye las manipulaciones del DOM del script.js antiguo.
export function usePortfolioEffects() {
  useEffect(() => {
    const header = document.querySelector('.site-header');
    const glow = document.querySelector('.cursor-glow');
    const reveals = document.querySelectorAll('.reveal');

    const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 24);
    const onPointerMove = (event) => {
      if (!glow) return;
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    onScroll();

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.14 });

    reveals.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 3, 2) * 90}ms`;
      observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      observer.disconnect();
    };
  }, []);
}
