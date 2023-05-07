import { Col, Container, Row } from 'react-bootstrap';
import TableComp from '../components/TableComp';

export default function DashboardAdminPage() {
  const summaryFilmData = [{ name: 'John Doe', age: 20 }];
  const summaryBookingData = [{ name: 'John Doe', age: 20 }];
  return (
    <Container className="mt-5">
      <h2>Dashboard Admin Page</h2>
      <Row className="mt-5">
        <Col>
          <h4
            style={{ textAlign: 'left', fontWeight: 'bold' }}
            className="mb-3"
          >
            Summary Film
          </h4>
          <TableComp data={summaryFilmData} />
        </Col>
        <Col>
          <h4
            style={{ textAlign: 'left', fontWeight: 'bold' }}
            className="mb-3"
          >
            Summary Booking
          </h4>
          <TableComp data={summaryBookingData} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h4
            style={{ textAlign: 'left', fontWeight: 'bold' }}
            className="mb-3"
          >
            Summary Film
          </h4>
          <TableComp data={summaryFilmData} />
        </Col>
      </Row>
    </Container>
  );
}
