import { Container, Row, Col, Badge } from 'react-bootstrap';
import flowerPict from '../../assets/images/flower-pict.jpg';
import Image from 'react-bootstrap/Image';

export default function DescriptionSection() {
  return (
    <Container>
      <Row className="pt-5">
        <Col className="mt-4">
          <h1 style={{ textAlign: 'left', fontWeight: 'bold' }}>Judul Film</h1>
          <span style={{ textAlign: 'left', display: 'block' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            ratione corrupti distinctio quibusdam iure blanditiis possimus qui
            animi. Earum veniam veritatis odio facere temporibus impedit
            adipisci pariatur maxime harum quod delectus illum, molestiae
            corrupti ipsa nam sed deserunt ducimus at! Numquam voluptates
            assumenda quod necessitatibus voluptate veniam quibusdam dolore
            unde!
          </span>
          <div className="info-film mt-5">
            <h5 style={{ textAlign: 'left' }}>
              Starring <Badge bg="primary">Crisspath</Badge>
            </h5>
            <h5 style={{ textAlign: 'left' }}>
              Director <Badge bg="primary">Crisspath</Badge>
            </h5>
            <h5 style={{ textAlign: 'left' }}>
              Censor Rating <Badge bg="primary">Crisspath</Badge>
            </h5>
            <h5 style={{ textAlign: 'left' }}>
              Genre <Badge bg="primary">Crisspath</Badge>
            </h5>
            <h5 style={{ textAlign: 'left' }}>
              Language <Badge bg="primary">Crisspath</Badge>
            </h5>
            <h5 style={{ textAlign: 'left' }}>
              Subtitle <Badge bg="primary">Crisspath</Badge>
            </h5>
            <h5 style={{ textAlign: 'left' }}>
              Duration <Badge bg="primary">Crisspath</Badge>
            </h5>
          </div>
        </Col>
        <Col>
          <Image style={{ height: '500px' }} src={flowerPict} rounded />
        </Col>
      </Row>
    </Container>
  );
}
