import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NowPlaying = () => {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_TMDB_KEY;
  const navigate = useNavigate();

  function fetchDetailData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((result) => {
        setData(result.data?.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchDetailData();
  }, []);

  return (
    <Container className="NowPlaying" style={{ marginTop: '70px' }}>
      <h2
        className="NowPlaying"
        style={{ textAlign: 'center', fontWeight: 'bold' }}
      >
        Now Playing
      </h2>
      <Row className="now-playing" style={{ marginTop: '30px' }}>
        {data.map((value, index) => (
          <Col key={value.id} md={2} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/book-ticket/${value.id}`)}
                >
                  Book Seat
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NowPlaying;
