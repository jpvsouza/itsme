import perfil from '../images/João com fundo.png';

export default function Resume() {
  return(
  <div id="resume" class="card border-dark mb-3 shadow-lg bg-dark text-light">
    <div class="row g-0 fundoCard">
      <div class="col-md-4">
        <img id="perfil" src={perfil} class="img-fluid shadow" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Resumo</h5>
          <p class="card-text">Olá, eu sou o João Paulo Veloso, Sou desenvolvedor full stack, tenho 30 anos e moro em Belo Horizonte.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  );
}
