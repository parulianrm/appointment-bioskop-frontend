import { Button, Card, ListGroup } from 'react-bootstrap';
import flowerPict from '../../assets/images/flower-pict.jpg';

export default function BookingResult({ children }) {
  return (
    <>
      <Card className="p-2">
        <Card.Img variant="top" src={flowerPict} />
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Senin, 12 Agustus 2023</ListGroup.Item>
          <ListGroup.Item>Studio Executive Premier</ListGroup.Item>
          <ListGroup.Item>Jam 13</ListGroup.Item>
          <ListGroup.Item>{children}</ListGroup.Item>
          <ListGroup.Item>
            <Button variant="primary" size="lg">
              Lanjut Bayar
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
