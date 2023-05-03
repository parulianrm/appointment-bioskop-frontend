import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ComingSoon = () => {
  return (
    <Container className="mt-7" style={{marginTop: '200px'}}>
      <h2 className="CoomingSoon" style={{ textAlign: 'center', fontWeight: 'bold'}}>Coming Soon</h2>
      <Row className="justify-content-center">
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300.png" />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Judul Film 1</Card.Title>
              <Card.Text>Deskripsi FIlm</Card.Text>
              <Button variant="primary" block className='w-100'>Booking Tiket</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300.png" />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Judul Film 2</Card.Title>
              <Card.Text>Deskripsi FIlm</Card.Text>
              <Button variant="primary" block className='w-100'>Booking Tiket</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300.png" />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title block>Judul Film 3</Card.Title>
              <Card.Text>Deskripsi FIlm</Card.Text>
              <Button variant="primary" block className='w-100'>Booking Tiket</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300.png" />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>Judul Film 4</Card.Title>
              <Card.Text>Deskripsi FIlm</Card.Text>
              <Button variant="primary" block className='w-100'>Booking Tiket</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ComingSoon;
