import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const NowPlaying = () => {
  return (
    <Container className='NowPlaying'>
      <h2 className='text-align-center'>Now Playing</h2>
      <Row className="now-playing">
        
        <Col md={2} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300.png" />
            <Card.Body>
              <Card.Title>Judul Film 1</Card.Title>
              <Button variant="primary" className='w-100'>Booking Tiket</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300.png" />
            <Card.Body>
              <Card.Title>Judul Film 2</Card.Title>
              <Button variant="primary">Booking Tiket</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300.png" />
            <Card.Body>
              <Card.Title>Judul Film 3</Card.Title>
              <Button variant="primary">Booking Tiket</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300.png" />
            <Card.Body>
              <Card.Title>Judul Film 4</Card.Title>
              <Button variant="primary">Booking Tiket</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300.png" />
            <Card.Body>
              <Card.Title>Judul Film 5</Card.Title>
              <Button variant="primary">Booking Tiket</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300.png" />
            <Card.Body>
              <Card.Title>Judul Film 6</Card.Title>
              <Button variant="primary">Booking Tiket</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default NowPlaying;
