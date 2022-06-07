
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Tutorial-Hub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Reactjs</Nav.Link>
            <Nav.Link >Angular</Nav.Link>
            <Nav.Link >Html</Nav.Link>
            <Nav.Link>Css</Nav.Link>
            <Nav.Link >Bootsrap</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Header