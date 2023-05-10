import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.png';
import ModalComponent from '../ModalComp';
import { useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [idOrder, setIdOrder] = useState('');
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const navigate = useNavigate();

  function changePage(url) {
    navigate(url);
  }

  return (
    <React.StrictMode>
      <ModalComponent handleClose={handleClose} showModal={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Order</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <span className="mb-2 d-block">Masukan Order ID Anda :</span>
          <FormControl
            type="text"
            className="mb-2"
            onChange={(e) => setIdOrder(e.target.value)}
            name="search"
            placeholder="Search"
            aria-label="Search"
            style={{ marginRight: '8px' }}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              navigate(`/update-booking/${idOrder}`, {
                state: {
                  from: 'home',
                },
              });
            }}
          >
            Cari Data Order
          </Button>
        </Modal.Footer>
      </ModalComponent>

      <Navbar bg="transperant" expand="lg" className="header d-flex">
        <Container className="headerLeft">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="250"
              height="30"
              className="d-inline-block align-top"
              alt="Brand Logo"
              onClick={() => changePage('/')}
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
              <Nav.Link onClick={() => handleShow()}>
                <span>Edit Order</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.StrictMode>
  );
}

export default Header;
