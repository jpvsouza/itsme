import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-info p-2 text-dark bg-opacity-50">
      <header>
        <ul className='nav justify-content-center'>
          <li className='nav-item'>
            <a className='nav-link' href='#resume'>Resumo</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#about'>Sobre</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#skills'>Habilidades</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#projects'>Projetos</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#contac'>Contato</a>
          </li>
        </ul>
      </header>

      <body>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          <div class="card border-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body text-dark">
              <h5 class="card-title">Resumo</h5>
              <p class="card-text">Olá, eu sou o João Paulo Veloso, Sou desenvolvedor full stack junior, tenho 30 anos e moro em Belo Horizonte.</p>
            </div>
          </div>
          <div class="card border-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body text-dark">
              <h5 class="card-title">Sobre</h5>
              <p class="card-text">Área de interesse.</p>
              <p class="card-text">Hobbies.</p>
            </div>
          </div>
          <div class="card border-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body text-dark">
              <h5 class="card-title">Habilidades</h5>
              <p class="card-text">Aqui tem que colocar vários icones de skills aprendidas.</p>
            </div>
          </div>
          <div class="card border-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body text-dark">
              <h5 class="card-title">Projetos</h5>
              <p class="card-text">Aqui tem que rolar um carrossel com projetos já feitos.</p>
            </div>
          </div>
          <div class="card border-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body text-dark">
              <h5 class="card-title">Contato</h5>
              <p class="card-text">Aqui já tem uma barrinha mais abaixo com informações pra entrar em contato.</p>
            </div>
          </div>

        </div>

        <div id='contact' className='card border-top rounded shadow p-3 mb-5 bg-body rounded container'>
          <div className='row'>
            <div className='col'>
              <p>Ícone do Gmail</p>
            </div>
            <div className='col'>
              <p>Ícone do LinkedIn</p>
            </div>
            <div className='col'>
              <p>Ícone do Github</p>
            </div>
          </div>
        </div>
      </body>

      <footer>
        <p>Feito com React e muito sofrimento</p>
        <p>João Paulo Veloso 2022 © Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
