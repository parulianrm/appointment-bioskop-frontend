import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Intro = () => {
  return (
    <Container className="bg">
      <Row>
        <Col md={6} className="mb-3" style={{ marginTop: '80px' }}>
          <h1 style={{ textAlign: 'left', fontWeight: 'bold' }}>
            Booking Tiket Nonton Gak Pake Repot!
          </h1>
          <p style={{ textAlign: 'left', display: 'block' }}>
            JagooIT adalah situs web pemesanan tiket bioskop online yang
            memudahkan Anda untuk memilih dan memesan tiket film yang ingin Anda
            tonton. Dapatkan pengalaman menonton film yang lebih menyenangkan
            dengan pemesanan tiket online JagooIT.
          </p>
          <Button variant="primary">Pilih Film</Button>{' '}
          <Button variant="secondary">Contact Admin</Button>
        </Col>
        <Col md={6}>
          <Card style={{ marginTop: '50px' }}>
            <Card.Img
              className=""
              variant="end-start"
              src="https://via.placeholder.com/400x300.png"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
