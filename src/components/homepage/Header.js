import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  function changePage(url) {
    navigate(url);
  }

  return (
    <Navbar bg="transperant" expand="lg" className="d-flex">
      <Container>
        <Navbar.Brand href="#home">
          JagooIT MOVIE TICKET ONLINE BOOKING
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => changePage('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => changePage('/book-ticket')}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => changePage('/pick-seat')}>
              Booking Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
