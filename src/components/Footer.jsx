import { SOCIAL } from '../data/portfolio.js';

function Footer() {
  return (
    <footer className="portfolio-footer d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-center gap-3">
      <span>© {new Date().getFullYear()} Guillermo Pereyra</span>
      <div className="d-flex flex-wrap gap-3 footer-social">
        <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
        <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
        <a href={`mailto:${SOCIAL.email}`}>EMAIL ↗</a>
      </div>
      <a href="#inicio">VOLVER ARRIBA ↑</a>
    </footer>
  );
}
export default Footer;
