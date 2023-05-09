/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from 'react-bootstrap';
import DescriptionSection from '../components/ticket-booking/DescriptionSection';
import PickDateSection from '../components/ticket-booking/PickDateSection';
import PickOptionSection from '../components/ticket-booking/PickOptionSection';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookingResult from '../components/ticket-booking/BookingResult';
import { useOrder, useOrderDispatch } from '../context/orderContext';

export default function TicketBooking() {
  const navigate = useNavigate();
  const dispatch = useOrderDispatch();
  let order = useOrder();

  let dateData = order.dateData;
  let studioData = order.studioData;
  let totalTicket = order.totalTicket;

  const [data, setData] = useState({});

  let params = useParams();

  function sendData() {
    const checkObjectEmpty = (obj) => Object.keys(obj).length === 0;

    if (
      !checkObjectEmpty(studioData) &&
      !checkObjectEmpty(dateData) &&
      totalTicket !== ''
    ) {
      navigate('/pick-seat', {
        state: {
          isAuthentication: true,
          filmData: data,
          orderData: order,
          totalTicket: totalTicket,
        },
      });
    }
  }

  function fetchDetailData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      )
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchDetailData();
    dispatch({ type: 'delete-all-change' });
  }, []);

  return (
    <Container className="mb-5 pb-5">
      <DescriptionSection data={data} />
      <PickDateSection />
      <Row style={{ marginTop: '160px' }}>
        <Col md={7}>
          <PickOptionSection studioData={studioData} />
        </Col>
        <Col md={5}>
          <BookingResult
            sendData={sendData}
            imgUrl={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            firstCol={
              dateData.id
                ? `${dateData.day}, ${dateData.date} 2023`
                : 'Pilih tanggal terlebih dahulu'
            }
            secondCol={
              studioData.id
                ? `Studio ${studioData.studio}`
                : 'Pilih studio terlebih dahulu'
            }
            thirdCol={
              studioData.id
                ? `Jam ${studioData.time} WIB`
                : 'Pilih studio terlebih dahulu'
            }
          >
            <select
              className="form-select"
              aria-label="Default select example"
              value={totalTicket}
              onChange={(e) =>
                dispatch({ type: 'added-total-ticket', data: e.target.value })
              }
            >
              <option value="">Jumlah Tiket</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </BookingResult>
        </Col>
      </Row>
    </Container>
  );
}
