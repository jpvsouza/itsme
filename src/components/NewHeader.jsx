import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function NewHeader() {
  return <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
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