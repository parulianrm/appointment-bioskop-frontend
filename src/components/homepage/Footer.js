import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row className="py-3">
          <Col md={8} className="text-center text-md-start">
            <p className="mb-0">Download Mobile App for Free</p>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <Button variant="primary" className="me-2">
              App Store
            </Button>
            <Button variant="light">
              Google Play
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
