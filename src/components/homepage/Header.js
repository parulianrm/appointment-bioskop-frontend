import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.png';

function Header() {
  const navigate = useNavigate();

  function changePage(url) {
    navigate(url);
  }

  return (
    <React.StrictMode>
      <Navbar bg="transperant" expand="lg" className="header d-flex">
        <Container className="headerLeft">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="250"
              height="30"
              className="d-inline-block align-top"
              alt="Brand Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => changePage('/')}>
                <span>Home</span>
              </Nav.Link>
              <Nav.Link onClick={() => changePage('/book-ticket')}>
                {' '}
                <span> About </span>
              </Nav.Link>
              <Nav.Link onClick={() => changePage('/pick-seat')}>
                <span>Booking Ticket</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.StrictMode>
  );
}

export default Header;
