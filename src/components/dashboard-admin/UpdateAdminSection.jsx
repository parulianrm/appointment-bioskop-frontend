import { Button, Col, Form, Row } from 'react-bootstrap';
import BookingResult from '../ticket-booking/BookingResult';
import { Container } from 'react-bootstrap';
import ButtonCustom from '../ticket-booking/ButtonCustom';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Grid from '../pick-seat/Grid';
import axios from 'axios';

export default function UpdateAdminSection() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [seat, setSeat] = useState([]);
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [orderData, setOrderData] = useState({ kursi: '' });

  const getOrderById = async () => {
    await axios
      .get(`http://localhost:3000/order/${params.id}`)
      .then((result) => {
        console.log(result);
        setOrderData(result.data);
        setSeat(result.data.kursi.split('|'));
        setName(result.data.nama);
        setTelephone(result.data.telephone);
      });
  };

  const sendData = async () => {
    await axios
      .put(`http://localhost:3000/order/update/${params.id}`, {
        nama: name,
        telephone: telephone,
        statusPaymentId: 0,
        statusId: 1,
        kursi: seat.reduce((previous, current) => {
          return `${previous}|${current}`;
        }),
      })
      .then((result) => {
        console.log(result);
        if (result.data.status === 'Ok') {
          navigate('/admin');
        }
      });
  };

  const cancelOrder = async () => {
    await axios
      .put(`http://localhost:3000/order/update/${params.id}`, {
        nama: name,
        telephone: telephone,
        statusPaymentId: 0,
        statusId: 0,
        kursi: seat.reduce((previous, current) => {
          return `${previous}|${current}`;
        }),
      })
      .then((result) => {
        console.log(result);
        if (result.data.status === 'Ok') {
          navigate('/admin');
        }
      });
  };

  useEffect(() => {
    getOrderById();
  }, []);

  return (
    <Container className="pt-5 mt-4">
      <Row className="mt-4">
        <Col md={7} className="px-5">
          <h3
            style={{ textAlign: 'left', fontWeight: 'bold' }}
            className="mb-5"
          >
            Pilih total {orderData.jumlah_kursi - seat.length} Kursi
          </h3>
          <div className="seat-container-option">
            <Grid
              rows={6}
              cols={8}
              seat={seat}
              pickSeatServe={orderData.jumlah_kursi}
              changeSeatData={(dataSeat) => setSeat(dataSeat)}
            />
          </div>
          <div className="info-confirm mt-4">
            <Row>
              <Button variant="primary">Layar</Button>
            </Row>
            <Row className="mt-3">
              <Col>
                <Button variant="primary">Tersedia</Button>
              </Col>
              <Col>
                <Button variant="success">Booked</Button>
              </Col>
              <Col>
                <Button variant="danger">Pilihan Anda</Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={5}>
          <BookingResult
            // imgUrl={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
            firstCol={`${orderData.tanggal}`}
            secondCol={`Studio ${orderData.nama_studio}`}
            thirdCol={`Jam ${orderData.jam} WIB`}
            sendData={sendData}
            submitElement={
              <div className="d-flex gap-2">
                <Button variant="primary" size="md" onClick={() => sendData()}>
                  Submit Data
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => cancelOrder()}
                >
                  Cancel Booking
                </Button>
              </div>
            }
          >
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="seatForm.name">
                    <Form.Control
                      type="text"
                      placeholder="Nama"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="seatForm.telephone">
                    <Form.Control
                      type="text"
                      placeholder="Telepon"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </BookingResult>
        </Col>
      </Row>
    </Container>
  );
}
