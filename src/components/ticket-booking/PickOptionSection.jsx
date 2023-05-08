import { Col, Row } from 'react-bootstrap';
import OptionWrapper from './OptionWrapper';

export default function PickOptionSection({ studioData }) {
  return (
    <>
      <Row>
        <h1 style={{ textAlign: 'left', fontWeight: 'bold', color: 'white' }}>
          Pilih Studio Dan Jam Tayang
        </h1>
        <div className="result-option text-left">
          <span
            style={{
              fontSize: '1.1rem',
              display: 'block',
              textAlign: 'left',
              color: 'white',
            }}
          >
            Studio :{' '}
            {studioData.studio
              ? studioData.studio
              : 'Pilih studio yang tersedia'}
          </span>
          <span
            style={{
              fontSize: '1.1rem',
              display: 'block',
              textAlign: 'left',
              color: 'white',
            }}
          >
            Jam Tayang :{' '}
            {studioData.time ? studioData.time : 'Pilih studio yang tersedia'}
          </span>
        </div>
      </Row>
      <Row
        className="mt-5"
        style={{
          fontSize: '1.1rem',
          display: 'block',
          textAlign: 'left',
          color: 'white',
        }}
      >
        <Col>
          <Row>
            <OptionWrapper
              title="Reguler 2D - Rp.50.000"
              studio="Regular 2D"
              cost={50000}
              optionsData={[
                {
                  id: 1,
                  time: '11:00',
                },
                {
                  id: 2,
                  time: '13:00',
                },
                {
                  id: 3,
                  time: '15:00',
                },
                {
                  id: 4,
                  time: '18:00',
                },
                {
                  id: 5,
                  time: '21:00',
                },
              ]}
            />
          </Row>
          <Row className="mt-4">
            <OptionWrapper
              title="Executive Premier - Rp.70.000"
              studio="Executive Premier"
              cost={70000}
              optionsData={[
                {
                  id: 6,
                  time: '11:00',
                },
                {
                  id: 7,
                  time: '13:00',
                },
                {
                  id: 8,
                  time: '15:00',
                },
                {
                  id: 9,
                  time: '18:00',
                },
                {
                  id: 10,
                  time: '21:00',
                },
              ]}
            />
          </Row>
          <Row className="mt-4">
            <OptionWrapper
              title="5D Dolby Atmos - Rp.95.000"
              studio="5D Dolby Atmos"
              cost={95000}
              optionsData={[
                {
                  id: 11,
                  time: '11:00',
                },
                {
                  id: 12,
                  time: '13:00',
                },
                {
                  id: 13,
                  time: '15:00',
                },
                {
                  id: 14,
                  time: '18:00',
                },
                {
                  id: 15,
                  time: '21:00',
                },
              ]}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
}
