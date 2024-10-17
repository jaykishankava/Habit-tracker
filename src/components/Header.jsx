// src/components/Header.jsx
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar   expand="lg" style={{backgroundColor:'#23c6af'}}>
      <Container>  
        <h2>Habit Tracker Application</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/manage-habits">Manage Habits</Nav.Link>
            <Nav.Link as={Link} to="/tracker">Tracker</Nav.Link>
            <Nav.Link as={Link} to="/notification">notification</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
