import { useOrder, useOrderDispatch } from '../../context/orderContext';
import ButtonCustom from './ButtonCustom';

export default function OptionWrapper({ title, optionsData, studio, cost }) {
  let order = useOrder();
  let studioData = order.studioData;

  const dispatch = useOrderDispatch();
  const changeSelectedData = (id, studio, time, cost) => {
    dispatch({
      type: 'added-studio',
      data: { id, studio, time, cost },
    });
  };

  return (
    <>
      <h4 style={{ textAlign: 'left', fontWeight: 'bold' }}>{title}</h4>
      <div className="action-button d-flex gap-2 flex-wrap mb-3">
        {optionsData.map((value, index) => (
          <ButtonCustom
            key={index}
            size="medium"
            color={studioData.id === value.id ? 'green' : 'blue'}
            onClick={() =>
              changeSelectedData(value.id, studio, value.time, cost)
            }
          >
            {value.time}
          </ButtonCustom>
        ))}
      </div>
    </>
  );
}
