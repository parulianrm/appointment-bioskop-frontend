import { Button, Card } from 'react-bootstrap';

export default function PickDate({ date, day }) {
  return (
    <Card>
      <Card.Header>{day}</Card.Header>
      <Card.Body>
        <Card.Title className="mb-4">{date}</Card.Title>
        <Button variant="primary">Pilih Tanggal</Button>
      </Card.Body>
    </Card>
  );
}
