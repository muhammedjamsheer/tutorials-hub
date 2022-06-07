import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Basics() {
    const codeString = `

    import { Navbar, Container, Nav } from 'react-bootstrap';
  
    function Header() {
      return (
        <>
          <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                Tutorial-Hub</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
    
        </>
      )
    }
    
    export default Header
    
    `;
    return (
        <div>
            <h4>Basics</h4>
            <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                {codeString}
            </SyntaxHighlighter>

            <p>We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.</p>
        </div>
    )
}

export default Basics