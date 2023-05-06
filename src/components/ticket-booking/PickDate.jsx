import { Card } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';

export default function PickDate({
  date,
  day,
  dateData,
  id,
  changeSelectedData,
}) {
  return (
    <Card>
      <Card.Header>{day}</Card.Header>
      <Card.Body>
        <ButtonCustom
          size="medium"
          color={dateData.id === id ? 'green' : 'blue'}
          onClick={() => changeSelectedData(id, date, day)}
        >
          {date}
        </ButtonCustom>
      </Card.Body>
    </Card>
  );
}
