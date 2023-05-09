import { Card } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';
import { useOrder, useOrderDispatch } from '../../context/orderContext';

export default function PickDate({ date, day, id }) {
  let order = useOrder();
  let dateData = order.dateData;

  const dispatch = useOrderDispatch();
  const changeSelectedData = (id, date, day) => {
    dispatch({
      type: 'added-date',
      data: {
        id,
        date,
        day,
      },
    });
  };

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
