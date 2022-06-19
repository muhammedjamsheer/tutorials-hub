
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import '../App.css';

function Header() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Tutorials-Hub</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="html"><span className="navlink">Html</span></NavLink>
            <NavLink to="css"><span className="navlink">Css</span></NavLink>
            <NavLink to="javascript"><span className="navlink">Javascript</span></NavLink>
            <NavLink to="angular"><span className="navlink">AngularJs</span></NavLink>
            <NavLink to="reactjs"><span className="navlink"></span>ReactJs</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header