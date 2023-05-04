import { Container } from 'react-bootstrap';
import DescriptionSection from '../components/ticket-booking/DescriptionSection';
import PickDateSection from '../components/ticket-booking/PickDateSection';
import PickOptionSection from '../components/ticket-booking/PickOptionSection';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TicketBooking() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  let params = useParams();

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
    <Container>
      <DescriptionSection data={data} />
      <PickDateSection data={data} />
      <PickOptionSection data={data} />
    </Container>
  );
}
