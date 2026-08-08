// HMR = Hot Module Replacement
import { useEffect } from "react";

import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="-mt-10 sm:-mt-12">
          <About />
        </section>

        <section id="skills" className="-mt-8 sm:-mt-10">
          <Skills />
        </section>

        <section id="projects" className="-mt-8 sm:-mt-10">
          <Projects />
        </section>

        <section id="contact" className="-mt-8 sm:-mt-10">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
