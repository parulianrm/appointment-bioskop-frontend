import React, { useState } from 'react';
import ButtonCustom from '../ticket-booking/ButtonCustom';
import './Button.css';

const ButtonGrid = ({
  pickSeatServe,
  rows,
  cols,
  changeSeatData,
  seat,
  seatBooked = ['F1', 'D7'],
}) => {
  const buttonArray = [];

  const buttonOnClick = (data, e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('button--blue')) {
      if (seat.length < pickSeatServe) {
        changeSeatData([...seat, e.target.textContent]);
        e.target.classList.remove('button--blue');
        e.target.classList.add('button--red');
      }
    } else if (e.target.classList.contains('button--red')) {
      console.log(e.target.classList);
      e.target.classList.remove('button--red');
      e.target.classList.add('button--blue');
      if (seat.find((value) => value === e.target.textContent)) {
        changeSeatData(
          seat.filter((value, index) => {
            return value !== e.target.textContent;
          })
        );
      }
    }

    console.log(seat);
  };

  function runSeat(stringData) {
    let color = '';

    if (seatBooked.find((value) => value === stringData)) {
      color = 'green';
    } else if (seatBooked.find((value) => value !== stringData)) {
      color = 'blue';
    } else {
      color = 'blue';
    }

    seat.forEach(() => {
      if (seat.find((value) => value === stringData)) {
        color = 'red';
      }
    });
    return color;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const id = i * cols + j;
      const stringData = `${String.fromCharCode(65 + i) + (j + 1)}`;
      buttonArray.push(
        <ButtonCustom
          key={id}
          color={(() => {
            return runSeat(stringData);
          })()}
          className="btn"
          onClick={(e) => buttonOnClick(stringData, e)}
        >
          {stringData}
        </ButtonCustom>
      );
    }
  }

  return <div className="button-grid-row">{buttonArray}</div>;
};

export default ButtonGrid;
