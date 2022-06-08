// import Carousel from "./Carousel";
import NewCarousel from "./NewCarousel";

export default function Projects() {
  return(
    <div id="projects" className="card border-dark mb-3 shadow-lg bg-dark text-light">
      <div className="card-body">
        <h5 className="card-title text-center">Projetos</h5>
        <p className="card-text">Esses são alguns projetos que já desenvolvi.</p>
        <NewCarousel />
      </div>
    </div>
  );
}