import Carousel from 'react-bootstrap/Carousel';
import starwarsImage from '../images/star.jpeg';
import recipesImage from '../images/recipes.jpeg';
import Card from 'react-bootstrap/Card';

export default function NewCarousel() {
    return (<Carousel>
        <Carousel.Item>
      <a href='https://jp-recipes.herokuapp.com/' rel='noreferrer' target='_blank'>
          <img
            className="d-block w-100"
            src={recipesImage}
            alt="First slide"
          />
      </a>
          <Card.Title>Recipes App</Card.Title>
          <Card.Text>
          Projeto de aplicativo de receitas. Feito em grupo e consumindo duas APIs diferentes, uma com dados de comidas e uma com dados de drinks.
          </Card.Text>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://jp-starwars.herokuapp.com/' rel='noreferrer' target='_blank'>
          <img
            className="d-block w-100"
            src={starwarsImage}
            alt="Second slide"
          />
          </a>
          <Card.Title>Starwars Planets</Card.Title>
          <Card.Text>Aplicação que consome dados de uma API de planetas Starwars.</Card.Text>
        </Carousel.Item>
        {/* <Carousel.Item>
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
          <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
          </Card.Text>
        </Carousel.Item> */}
      </Carousel>);
}