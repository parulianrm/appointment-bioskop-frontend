import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../../styles/pilihKursi.css"

function PilihKursi() {
  return (
    <Container className='bg'>
      <Row>
        <Col md={6} className="mb-3" style={{marginTop: '80px'}}>
          <h1>PILIH KURSI ( 2 SEAT )</h1>
          <div className="kursi-container">
            {/* Tampilkan 40 kursi */}
            {Array(40).fill().map((_, index) => (
              <Button key={index} className="kursi">1</Button>
            ))}
          </div>
          <Button variant="primary" block className='layarbioskop w-100'>LAYAR</Button>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img className="" variant="end-start" src="https://via.placeholder.com/400x300.png" />
            <Card.Body>
              <Card.Text>
                Lorem Ipsum
              </Card.Text>
            </Card.Body>
            <Button variant="primary" block className='lanjutBayar w-100'>LANJUT BAYAR</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PilihKursi;
