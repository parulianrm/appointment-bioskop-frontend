import { Button } from 'react-bootstrap';

export default function OptionWrapper({ title }) {
  return (
    <>
      <h4 style={{ textAlign: 'left', fontWeight: 'bold' }}>{title}</h4>
      <div className="action-button d-flex gap-2 flex-wrap">
        <Button variant="primary" size="lg">
          10:00
        </Button>

        <Button variant="primary" size="lg">
          11:00
        </Button>

        <Button variant="primary" size="lg">
          15:00
        </Button>
      </div>
    </>
  );
}
