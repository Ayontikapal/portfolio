import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Projects from "./components/project.jsx";
import Contact from "./components/contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}