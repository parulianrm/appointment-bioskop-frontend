import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_TMDB_KEY;
  const navigate = useNavigate();

  function fetchDetailData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
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
    <Container className="mt-7" style={{ marginTop: '200px' }}>
      <h2
        className="CoomingSoon"
        style={{ textAlign: 'center', fontWeight: 'bold' }}
      >
        Coming Soon
      </h2>
      <Row className="justify-content-center">
        {data.map((value, index) => (
          <Col key={value.id} md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
              />
              <Card.Body className="flex-column justify-content-center align-items-center">
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.original_title}</Card.Text>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => navigate(`/book-ticket/${value.id}`)}
                >
                  Booking Tiket
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ComingSoon;
