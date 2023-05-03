import { Col, Row } from 'react-bootstrap';

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
        </Col>
        <Col md={5}></Col>
      </Row>
    </>
  );
}
