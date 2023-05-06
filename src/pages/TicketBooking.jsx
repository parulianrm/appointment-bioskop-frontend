import { Col, Container, Row } from 'react-bootstrap';
import DescriptionSection from '../components/ticket-booking/DescriptionSection';
import PickDateSection from '../components/ticket-booking/PickDateSection';
import PickOptionSection from '../components/ticket-booking/PickOptionSection';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookingResult from '../components/ticket-booking/BookingResult';

export default function TicketBooking() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  let params = useParams();

  const [dateData, setDateData] = useState({
    id: 0,
    date: '',
    day: '',
  });

  function changeDateData(id, date, day) {
    setDateData({
      id,
      date,
      day,
    });
  }

  const [studioData, setStudioData] = useState({
    id: 0,
    studio: '',
    time: '',
  });

  function changeStudioData(id, studio, time) {
    setStudioData({ id, studio, time });
  }

  const [totalTicket, setTotalTicket] = useState(0);

  function sendData() {
    console.log(totalTicket, studioData, dateData, params.id);
  }

  function fetchDetailData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      )
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchDetailData();
  }, []);

  return (
    <Container className="mb-5 pb-5">
      <DescriptionSection data={data} />
      <PickDateSection
        data={data}
        dateData={dateData}
        changeDateData={changeDateData}
      />
      <Row className="mt-5 pt-2">
        <Col md={7}>
          <PickOptionSection
            data={data}
            studioData={studioData}
            dateData={dateData}
            changeStudioData={changeStudioData}
          />
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
              dateData.id
                ? `Jam ${studioData.time} WIB`
                : 'Pilih tanggal terlebih dahulu'
            }
          >
            <select
              className="form-select"
              aria-label="Default select example"
              value={totalTicket}
              onChange={(e) => setTotalTicket(e.target.value)}
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
