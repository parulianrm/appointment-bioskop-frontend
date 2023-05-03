import { Button, Col, Row } from 'react-bootstrap';

export default function OptionWrapper() {
  return (
    <>
      <h4 style={{ textAlign: 'left', fontWeight: 'bold' }}>
        Studio Regular Rp.50.000
      </h4>
      <div className="d-grid gap-2 col-3">
        <Row>
          <Col>
            <Button variant="primary" size="lg">
              Block level button
            </Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg">
              Block level button
            </Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg">
              Block level button
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
