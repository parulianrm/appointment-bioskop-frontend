import { Button, Col, Form, Row } from 'react-bootstrap';
import BookingResult from '../ticket-booking/BookingResult';
import { Container } from 'react-bootstrap';
import flowerPic from '../../assets/images/flower-pict.jpg';
import { useLocation } from 'react-router-dom';

export default function PickSeat() {
  const location = useLocation();
  const filmData = location.state?.data?.filmData;
  const orderData = location.state?.data?.orderData;

  const col = 8;
  const row = 5;

  function productSeatTemplate() {
    const arr = [];
    for (let a = row; a >= 0; a--) {
      arr.push(
        <Row className="mt-3" key={`row${a}`}>
          {(() => {
            const arr = [];
            for (let i = col; i > 0; i--) {
              arr.push(
                <Col key={`col${a}${i}`}>
                  <button
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    type="button"
                  >
                    {`${String.fromCharCode(97 + a).toUpperCase()}${i}`}
                  </button>
                </Col>
              );
            }
            return arr;
          })()}
        </Row>
      );
    }
    return arr;
  }

  return (
    <Container className="pt-5 mt-4">
      <Row className="mt-4">
        <Col md={7} className="px-5">
          <h3
            style={{ textAlign: 'left', fontWeight: 'bold' }}
            className="mb-5"
          >
            Pick Seat (2 Seat)
          </h3>
          <div className="seat-container-option">{productSeatTemplate()}</div>
          <div className="info-confirm mt-4">
            <Row>
              <Button variant="primary">Layar</Button>
            </Row>
            <Row className="mt-3">
              <Col>
                <Button variant="primary">Booked</Button>
              </Col>
              <Col>
                <Button variant="success">Tersedia</Button>
              </Col>
              <Col>
                <Button variant="secondary">Pilihan Anda</Button>
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
          >
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="seatForm.name">
                    <Form.Control type="text" placeholder="Nama" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="seatForm.telephone">
                    <Form.Control type="text" placeholder="Telepon" />
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
