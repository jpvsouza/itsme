import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function NewHeader() {
  return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="#resume">Resumo</Nav.Link>
      <Nav.Link href="#about">Sobre</Nav.Link>
      <Nav.Link href="#skills">Habilidades</Nav.Link>
      <Nav.Link href="#projects">Projetos</Nav.Link>
      <Nav.Link href="#contact">Contato</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
}
