import { Col, Container, Row, Table } from 'react-bootstrap';
import TableComp from '../components/TableComp';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../components/ticket-booking/ButtonCustom';
import { useNavigate } from 'react-router-dom';
import MultiSelect from '../components/Multiselect';
import SearchRow from '../components/SearchComp';

export default function DashboardAdminPage() {
  const navigate = useNavigate();
  const [resultBookingData, setResultBookingData] = useState([]);
  const [summaryFilmData, setSummaryFilmData] = useState([
    { nama: 'John Doe' },
  ]);
  const [bookingData, setBookingData] = useState([{ nama: 'John Doe' }]);
  const [summaryBookingData, setSummaryBookingData] = useState([
    { nama: 'John Doe' },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [queryItem, setQueryItem] = useState('');

  const changeQueryItem = (item) => {
    setQueryItem(item);
    setResultBookingData(
      bookingData.filter((value, index) => {
        return value.film.includes(item);
      })
    );
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setResultBookingData(
      bookingData.filter((value, index) => {
        return value.nama_studio.includes(item.filterData);
      })
    );
  };
  const dropdownItems = [
    { value: 0, label: 'Show All', filterData: '' },
    { value: 1, label: 'Regular 2D', filterData: 'Regular 2D' },
    { value: 2, label: 'Executive Premier', filterData: 'Executive Premier' },
    { value: 3, label: '5D Dolby Atmos', filterData: '5D Dolby Atmos' },
  ];

  const getSummaryFilm = async () => {
    await axios
      .get('http://localhost:3000/order/summary-film')
      .then((result) => {
        setSummaryFilmData(
          result.data.map((value, index) => {
            if (result.data.length === 0) {
              return {
                id_film: '',
                nama_film: '',
                jumlah_penonton: '',
              };
            } else {
              return {
                id_film: value.id_film,
                nama_film: value.nama_film,
                jumlah_penonton: value._sum.jumlah_kursi,
              };
            }
          })
        );
      });
  };

  const getAllOrderData = async () => {
    await axios.get('http://localhost:3000/order').then((result) => {
      setBookingData(
        result.data.map((value, index) => {
          return {
            id: value.id,
            tanggal: value.tanggal,
            film: value.nama_film,
            nama_studio: value.nama_studio,
            jam: value.jam,
            nama: value.nama,
            seat: value.kursi,
            status: value.status,
          };
        })
      );
      setResultBookingData(
        result.data.map((value, index) => {
          return {
            id: value.id,
            tanggal: value.tanggal,
            film: value.nama_film,
            nama_studio: value.nama_studio,
            jam: value.jam,
            nama: value.nama,
            seat: value.kursi,
            status: value.status,
          };
        })
      );
    });
  };

  const getSummaryBooking = async () => {
    await axios
      .get('http://localhost:3000/order/summary-booking')
      .then((result) => {
        setSummaryBookingData(
          result.data.map((value) => {
            return {
              status: value?.statusName,
              jumlah_penonton: value?.value?._sum.jumlah_kursi,
            };
          })
        );
      });
  };

  useEffect(() => {
    getSummaryFilm();
    getAllOrderData();
    getSummaryBooking();
  }, []);

  return (
    <Container className="mt-5">
      <h2 style={{ textAlign: 'left', fontWeight: 'bold', color: 'white' }}>
        Dashboard Admin Page
      </h2>
      <Row className="mt-5">
        <Col>
          <h4
            style={{ textAlign: 'left', fontWeight: '500', color: 'white' }}
            className="mb-3"
          >
            Summary Film
          </h4>
          <TableComp data={summaryFilmData} />
        </Col>
        <Col>
          <h4
            style={{ textAlign: 'left', fontWeight: '500', color: 'white' }}
            className="mb-3"
          >
            Summary Booking
          </h4>
          <TableComp data={summaryBookingData} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Row>
            <h4
              style={{ textAlign: 'left', fontWeight: '500', color: 'white' }}
              className="mb-3"
            >
              All Order Data
            </h4>
          </Row>
          <Row>
            <Col>
              <MultiSelect
                title="Filter data by Studio"
                items={dropdownItems}
                onItemClick={handleItemClick}
              />
            </Col>
            <Col>
              <SearchRow onSearch={changeQueryItem} />
            </Col>
          </Row>
          <Table className="my-table mt-4">
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
              {bookingData.filter((value, index) => {
                return value.nama_studio === selectedItem;
              })}
              {resultBookingData.map((row, index) => (
                <tr key={index}>
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
