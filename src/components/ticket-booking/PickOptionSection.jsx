import { Col, Row } from 'react-bootstrap';
import OptionWrapper from './OptionWrapper';

export default function PickOptionSection() {
  return (
    <>
      <Row className="mt-5 pt-2">
        <h1 style={{ textAlign: 'left', fontWeight: 'bold' }}>
          Pilih Studio Dan Jam
        </h1>
      </Row>
      <Row className="mt-4">
        <Col>
          <OptionWrapper />
        </Col>
        <Col>
          <OptionWrapper />
        </Col>
      </Row>
    </>
  );
}
