import { Col, Container, Row, Table } from 'react-bootstrap';
import TableComp from '../components/TableComp';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../components/ticket-booking/ButtonCustom';
import { useNavigate } from 'react-router-dom';

export default function DashboardAdminPage() {
  const navigate = useNavigate();
  const [summaryFilmData, setSummaryFilmData] = useState([
    { nama: 'John Doe' },
  ]);
  const [bookingData, setBookingData] = useState([{ nama: 'John Doe' }]);

  const summaryBookingData = [{ name: 'John Doe', age: 20 }];

  const getSummaryFilm = async () => {
    await axios
      .get('http://localhost:3000/order/summary-film')
      .then((result) => {
        setSummaryFilmData(
          result.data.map((value, index) => {
            return {
              id_film: value.id_film,
              nama_film: value.nama_film,
              jumlah_penonton: value._sum.jumlah_kursi,
            };
          })
        );
      });
  };

  const getAllOrderData = async () => {
    await axios.get('http://localhost:3000/order').then((result) => {
      console.log(result);
      setBookingData(
        result.data.map((value, index) => {
          return {
            id: value.id,
            tanggal: value.tanggal,
            film: value.nama_film,
            jam: value.jam,
            nama: value.nama,
            seat: value.kursi,
            status: value.status,
          };
        })
      );
    });
  };

  useEffect(() => {
    getSummaryFilm();
    getAllOrderData();
  }, []);

  return (
    <Container className="mt-5">
      <h2 style={{ textAlign: 'left', fontWeight: 'bold' }}>
        Dashboard Admin Page
      </h2>
      <Row className="mt-5">
        <Col>
          <h4 style={{ textAlign: 'left', fontWeight: '500' }} className="mb-3">
            Summary Film
          </h4>
          <TableComp data={summaryFilmData} />
        </Col>
        <Col>
          <h4 style={{ textAlign: 'left', fontWeight: '500' }} className="mb-3">
            Summary Booking
          </h4>
          <TableComp data={summaryBookingData} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h4 style={{ textAlign: 'left', fontWeight: '500' }} className="mb-3">
            All Order Data
          </h4>
          <Table className="my-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Tanggal</th>
                <th>Film</th>
                <th>Jam</th>
                <th>Nama</th>
                <th>Kursi</th>
                <th>Status</th>
                <th>Opsi</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.tanggal}</td>
                  <td>{row.film}</td>
                  <td>{row.jam}</td>
                  <td>{row.nama}</td>
                  <td>{row.seat}</td>
                  <td>{row.status}</td>
                  <td>
                    <Button
                      size="small"
                      onClick={() => navigate(`/update-booking/${row.id}`)}
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
