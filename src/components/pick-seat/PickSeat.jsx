import { Button, Col, Form, Row } from 'react-bootstrap';
import BookingResult from '../ticket-booking/BookingResult';
import { Container } from 'react-bootstrap';
import ButtonCustom from '../ticket-booking/ButtonCustom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Grid from './Grid';

export default function PickSeat() {
  const navigate = useNavigate();
  const location = useLocation();
  const [seat, setSeat] = useState([]);
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');

  let filmData = location.state?.filmData;
  let orderData = location.state?.orderData;
  let pickSeatServe = orderData.totalTicket;

  function sendData() {
    console.log({
      name,
      telephone,
      filmData,
      orderData,
    });
  }

  return (
    <Container className="pt-5 mt-4">
      <Row className="mt-4">
        <Col md={7} className="px-5">
          <h3
            style={{ textAlign: 'left', fontWeight: 'bold' }}
            className="mb-5"
          >
            Pilih total {pickSeatServe - seat.length} Kursi
          </h3>
          <div className="seat-container-option">
            <Grid
              rows={6}
              cols={8}
              seat={seat}
              pickSeatServe={pickSeatServe}
              changeSeatData={(dataSeat) => setSeat(dataSeat)}
            />
          </div>
          <div className="info-confirm mt-4">
            <Row>
              <Button variant="primary">Layar</Button>
            </Row>
            <Row className="mt-3">
              <Col>
                <Button variant="primary">Tersedia</Button>
              </Col>
              <Col>
                <Button variant="success">Booked</Button>
              </Col>
              <Col>
                <Button variant="danger">Pilihan Anda</Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={5}>
          <BookingResult
            imgUrl={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
            firstCol={`${orderData.dateData.day}, ${orderData.dateData.date} 2023`}
            secondCol={`Studio ${orderData.studioData.studio}`}
            thirdCol={`Jam ${orderData.studioData.time} WIB`}
            sendData={sendData}
          >
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="seatForm.name">
                    <Form.Control
                      type="text"
                      placeholder="Nama"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="seatForm.telephone">
                    <Form.Control
                      type="text"
                      placeholder="Telepon"
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </BookingResult>
        </Col>
      </Row>
    </Container>
  );
}
