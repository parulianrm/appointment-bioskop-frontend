import ButtonCustom from './ButtonCustom';

export default function OptionWrapper({
  title,
  optionsData,
  studioData,
  changeSelectedData,
  studio,
}) {
  return (
    <>
      <h4 style={{ textAlign: 'left', fontWeight: 'bold' }}>{title}</h4>
      <div className="action-button d-flex gap-2 flex-wrap">
        {optionsData.map((value, index) => (
          <ButtonCustom
            key={index}
            size="medium"
            color={studioData.id === value.id ? 'green' : 'blue'}
            onClick={() => changeSelectedData(value.id, studio, value.time)}
          >
            {value.time}
          </ButtonCustom>
        ))}
      </div>
    </>
  );
}
