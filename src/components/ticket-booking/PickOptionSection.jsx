import { Col, Row } from 'react-bootstrap';
import OptionWrapper from './OptionWrapper';
import BookingResult from './BookingResult';

export default function PickOptionSection() {
  return (
    <>
      <Row className="mt-5 pt-2">
        <h1 style={{ textAlign: 'left', fontWeight: 'bold' }}>
          Pilih Studio Dan Jam
        </h1>
      </Row>
      <Row className="mt-4">
        <Col md={7}>
          <Row>
            <OptionWrapper title="Studio Reguler Rp.50.000" />
          </Row>
          <Row className="mt-4">
            <OptionWrapper title="Studio Executive Premier Rp.70.000" />
          </Row>
          <Row className="mt-4">
            <OptionWrapper title="Studio 5D Dolby Atmos Rp.95.000" />
          </Row>
        </Col>
        <Col md={5}>
          <BookingResult />
        </Col>
      </Row>
    </>
  );
}
