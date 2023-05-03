import { Button, Col, Form, Row } from 'react-bootstrap';
import BookingResult from '../ticket-booking/BookingResult';

export default function PickSeat() {
  const col = 8;
  const row = 5;

  function productSeatTemplate() {
    const arr = [];
    for (let i = 0; i < row; i++) {
      arr.push(
        <Row className="mt-3">
          {(() => {
            const arr = [];
            for (let i = 1; i < col; i++) {
              arr.push(
                <Col>
                  <button
                    class="btn btn-primary"
                    style={{ width: '100%' }}
                    type="button"
                  >
                    1
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
    <>
      <h3 style={{ textAlign: 'left', fontWeight: 'bold' }}>
        Pick Seat (2 Seat)
      </h3>
      <Row className="mt-4">
        <Col md={7}>
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
          <BookingResult>
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
    </>
  );
}
