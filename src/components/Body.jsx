import Resume from "./Resume";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Body() {
  return(
    <main>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        <Resume />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
