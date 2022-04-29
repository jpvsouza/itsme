import Carousel from "./Carousel";

export default function Projects() {
  return(
    <div className="card border-dark mb-3">
      <div className="card-body text-dark">
        <h5 className="card-title">Projetos</h5>
        <p className="card-text">Aqui tem que rolar um carrossel com projetos já feitos.</p>
        <Carousel />
      </div>
    </div>
  );
}