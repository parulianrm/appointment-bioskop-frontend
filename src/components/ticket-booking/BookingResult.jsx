import { Button, Card, ListGroup } from 'react-bootstrap';

export default function BookingResult({
  children,
  imgUrl,
  firstCol,
  secondCol,
  thirdCol,
  sendData,
  forthCol,
  submitElement,
}) {
  let picture = imgUrl ? imgUrl : null;
  return (
    <>
      <Card className="p-2">
        <Card.Img variant="top" src={picture} alt="Gambar Result" />
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{firstCol}</ListGroup.Item>
          <ListGroup.Item>{secondCol}</ListGroup.Item>
          <ListGroup.Item>{thirdCol}</ListGroup.Item>
          {forthCol ? <ListGroup.Item>{forthCol}</ListGroup.Item> : <></>}
          <ListGroup.Item>{children}</ListGroup.Item>
          <ListGroup.Item>
            {submitElement ? (
              submitElement
            ) : (
              <Button variant="primary" size="lg" onClick={() => sendData()}>
                Submit Data
              </Button>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
