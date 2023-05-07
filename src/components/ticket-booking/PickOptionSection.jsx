import { Col, Row } from 'react-bootstrap';
import OptionWrapper from './OptionWrapper';

export default function PickOptionSection({ studioData }) {
  return (
    <>
      <Row>
        <h1 style={{ textAlign: 'left', fontWeight: 'bold' }}>
          Pilih Studio Dan Jam
        </h1>
        <div className="result-option text-left">
          <span
            style={{
              fontSize: '1.1rem',
              display: 'block',
              textAlign: 'left',
            }}
          >
            Studio :{' '}
            {studioData.studio
              ? studioData.studio
              : 'Pilih studio yang tersedia'}
          </span>
          <span
            style={{ fontSize: '1.1rem', display: 'block', textAlign: 'left' }}
          >
            Waktu :{' '}
            {studioData.time ? studioData.time : 'Pilih studio yang tersedia'}
          </span>
        </div>
      </Row>
      <Row className="mt-5">
        <Col>
          <Row>
            <OptionWrapper
              title="Studio Reguler Rp.50.000"
              studio="Studio Regular"
              optionsData={[
                {
                  id: 1,
                  time: '10:00',
                },
                {
                  id: 2,
                  time: '11:00',
                },
                {
                  id: 3,
                  time: '13:00',
                },
              ]}
            />
          </Row>
          <Row className="mt-4">
            <OptionWrapper
              title="Studio Executive Premier Rp.70.000"
              studio="Studio Executive Premier"
              optionsData={[
                {
                  id: 4,
                  time: '10:00',
                },
                {
                  id: 5,
                  time: '11:00',
                },
                {
                  id: 6,
                  time: '13:00',
                },
              ]}
            />
          </Row>
          <Row className="mt-4">
            <OptionWrapper
              title="Studio 5D Dolby Atmos Rp.95.000"
              studio="5D Dolby Atmos"
              optionsData={[
                {
                  id: 7,
                  time: '10:00',
                },
                {
                  id: 8,
                  time: '11:00',
                },
                {
                  id: 9,
                  time: '13:00',
                },
              ]}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
}
