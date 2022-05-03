import Carousel from 'react-bootstrap/Carousel';

export default function NewCarousel() {
    return (<Carousel>
        <Carousel.Item>
      <a href='https://jp-recipes.herokuapp.com/' rel='noreferrer' target='_blank'>
          <img
            className="d-block w-100"
            src="https://www.serebii.net/art/th/4.png"
            alt="First slide"
          />
      </a>
          <Carousel.Caption>
            <h3>Recipes App</h3>
            <p>Projeto de aplicativo de receitas chato de maaaaaais. Feito em grupo e consumindo duas APIs diferentes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://jp-starwars.herokuapp.com/' rel='noreferrer' target='_blank'>
          <img
            className="d-block w-100"
            src="https://www.serebii.net/art/th/5.png"
            alt="Second slide"
          />
          </a>
      
          <Carousel.Caption>
            <h3>Startwars Planets</h3>
            <p>Aplicação que consome dados de uma API de planetas Starwars.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a  href='https://jp-store.herokuapp.com/' rel='noreferrer' target='_blank'>
          <img
            className="d-block w-100"
            src="https://www.serebii.net/art/th/6.png"
            alt="Third slide"
          />
          </a>
      
          <Carousel.Caption>
            <h3>Web Store</h3>
            <p>Projeto que consomo API do mercado livre.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>);
}