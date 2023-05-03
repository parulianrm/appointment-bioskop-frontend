import { Row, Col } from 'react-bootstrap';
import PickDate from './PickDate';

export default function PickDateSection() {
  return (
    <>
      <Row className="mt-5 pt-2">
        <h1 style={{ textAlign: 'left', fontWeight: 'bold' }}>Pilih Tanggal</h1>
      </Row>
      <Row className="mt-4">
        <Col bg="secondary">
          <PickDate date="21 April" day="Senin" />
        </Col>
        <Col bg="secondary">
          <PickDate date="22 April" day="Selasa" />
        </Col>
        <Col bg="secondary">
          <PickDate date="23 April" day="Rabu" />
        </Col>
        <Col bg="secondary">
          <PickDate date="24 April" day="Kamis" />
        </Col>
        <Col bg="secondary">
          <PickDate date="25 April" day="Jumat" />
        </Col>
        <Col bg="secondary">
          <PickDate date="26 April" day="Sabtu" />
        </Col>
      </Row>
    </>
  );
}
