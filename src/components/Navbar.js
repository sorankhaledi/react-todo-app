import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand
          style={{
            fontWeight: "Bolder",
            fontSize: "1.5rem",
            color: "var(--base-color)",
            fontFamily: "Courier New"
          }}
          to="/"
        >Todo App</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link activeclassname="active" as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link activeclassname="active" as={NavLink} to="/users">Users</Nav.Link>
          <Nav.Link activeclassname="active" as={NavLink} to="/todos">Todos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
 
export default NavbarComponent;