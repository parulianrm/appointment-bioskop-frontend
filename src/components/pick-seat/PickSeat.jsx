import { Button, Col, Form, Row } from 'react-bootstrap';
import BookingResult from '../ticket-booking/BookingResult';
import { Container } from 'react-bootstrap';
import ButtonCustom from '../ticket-booking/ButtonCustom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Grid from './Grid';
import axios from 'axios';

export default function PickSeat() {
  const navigate = useNavigate();
  const location = useLocation();
  const [seat, setSeat] = useState([]);
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [seatBooked, setSeatBooked] = useState([]);

  let filmData = location.state?.filmData;
  let orderData = location.state?.orderData;
  let pickSeatServe = orderData.totalTicket;

  async function sendData() {
    await axios
      .post('http://localhost:3000/order/create', {
        tanggal: `${orderData.dateData.date} 2023`,
        id_film: `${filmData.id}`,
        nama_film: filmData.title,
        nama_studio: orderData.studioData.studio,
        jam: orderData.studioData.time,
        jumlah_kursi: Number(pickSeatServe),
        telephone: telephone,
        biaya_total: orderData.studioData.cost,
        nama: name,
        kursi: seat.reduce((previous, current) => {
          return `${previous}|${current}`;
        }),
      })
      .then((result) => {
        if (result.data.status === 'Ok') {
          navigate('/', {
            state: {
              modal: {
                show: true,
                orderData: {
                  ...result.data,
                },
              },
            },
          });
        }
      });
  }

  const getBookedTicket = async ({
    id_film,
    nama_studio,
    jam,
    tanggal,
    seat,
  }) => {
    console.log(id_film, nama_studio, jam, tanggal, seat);
    await axios
      .get(`http://localhost:3000/order/booked-ticket`, {
        params: {
          id_film,
          nama_studio,
          jam,
          tanggal,
        },
      })
      .then((result) => {
        let kursiArray = result.data.kursi_booked.split('|');
        console.log(result);
        setSeatBooked(
          kursiArray.map((value) => {
            if (
              value !== '' &&
              !seat.find((valueData) => valueData === value)
            ) {
              return value;
            }
          })
        );
      });
  };

  useEffect(() => {
    getBookedTicket({
      id_film: filmData.id,
      nama_studio: orderData.studioData.studio,
      jam: orderData.studioData.time,
      tanggal: `${orderData.dateData.date} 2023`,
      seat: [],
    });
  }, []);

  return (
    <Container className="pt-5 mt-4 pb-5 mb-5">
      <Row className="mt-4">
        <Col md={7} className="px-5">
          <h3
            style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}
            className="mb-3"
          >
            Pilih - {pickSeatServe - seat.length} Kursi
          </h3>
          <div className="seat-container-option">
            <Grid
              rows={6}
              cols={8}
              seat={seat}
              seatBooked={seatBooked}
              pickSeatServe={pickSeatServe}
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
            imgUrl={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
            firstCol={`${orderData.dateData.day}, ${orderData.dateData.date} 2023`}
            secondCol={`Studio ${orderData.studioData.studio}`}
            thirdCol={`Jam ${orderData.studioData.time} WIB`}
            forthCol={`Pilihan Kursi : ${seat}`}
            sendData={sendData}
            submitElement={
              <div className="d-flex gap-2">
                <Button variant="primary" size="md" onClick={() => sendData()}>
                  Lanjut Bayar
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
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="seatForm.telephone">
                    <Form.Control
                      type="text"
                      placeholder="Telepon"
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
