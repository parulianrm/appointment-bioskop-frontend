import { Row, Col } from 'react-bootstrap';
import PickDate from './PickDate';
import { useState } from 'react';

export default function PickDateSection({ dateData, changeDateData }) {
  const changeSelectedData = (id, date, day) => {
    changeDateData(id, date, day);
  };
  return (
    <>
      <Row className="mt-5 pt-2">
        <h1 style={{ textAlign: 'left', fontWeight: 'bold' }}>Pilih Tanggal</h1>
        <div className="result-option text-left">
          <span
            style={{
              fontSize: '1.1rem',
              display: 'block',
              textAlign: 'left',
            }}
          >
            Pilihan Tanggal :{' '}
            {dateData.id
              ? `${dateData.day}, ${dateData.date} 2023`
              : 'Pilih tanggal yang tersedia'}
          </span>
        </div>
      </Row>
      <Row className="mt-4">
        <Col bg="secondary">
          <PickDate
            date="21 April"
            day="Senin"
            dateData={dateData}
            changeSelectedData={changeSelectedData}
            id={1}
          />
        </Col>
        <Col bg="secondary">
          <PickDate
            date="22 April"
            day="Selasa"
            dateData={dateData}
            changeSelectedData={changeSelectedData}
            id={2}
          />
        </Col>
        <Col bg="secondary">
          <PickDate
            date="23 April"
            day="Rabu"
            dateData={dateData}
            changeSelectedData={changeSelectedData}
            id={3}
          />
        </Col>
        <Col bg="secondary">
          <PickDate
            date="24 April"
            day="Kamis"
            dateData={dateData}
            changeSelectedData={changeSelectedData}
            id={4}
          />
        </Col>
        <Col bg="secondary">
          <PickDate
            date="25 April"
            day="Jumat"
            dateData={dateData}
            changeSelectedData={changeSelectedData}
            id={5}
          />
        </Col>
        <Col bg="secondary">
          <PickDate
            date="26 April"
            day="Sabtu"
            dateData={dateData}
            changeSelectedData={changeSelectedData}
            id={6}
          />
        </Col>
      </Row>
    </>
  );
}
