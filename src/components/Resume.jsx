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
          <p class="card-text">Brasileiro, 30 anos, natural de Belo Horizonte/MG e atualmente residente na mesma cidade.
Graduado em Sistemas de Informação pela Pontifícia Universidade Católica de Minas Gerais.
Estudante de Desenvolvimento WEB pela Trybe.</p>
          {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
      </div>
    </div>
  </div>
  );
}
