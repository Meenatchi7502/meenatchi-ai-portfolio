import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import MouseGlow from "./MouseGlow";
import ScrollProgress from "./ScrollProgress";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <MouseGlow />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}