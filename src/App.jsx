import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Stack from './components/Stack.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { usePortfolioEffects } from './hooks/usePortfolioEffects.js';

function App() {
  usePortfolioEffects();

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
