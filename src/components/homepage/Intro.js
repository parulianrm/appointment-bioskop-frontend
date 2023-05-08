import React, { useEffect, useState } from 'react';
import './Intro.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Intro = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US'
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie, index) => (
            <Link
              key={index}
              style={{ textDecoration: 'none', color: 'white' }}
              to={`/book-ticket/${movie.id}`}
            >
              <div className="posterImage" key={index}>
                <img
                  alt="nama film"
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ''}
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ''}
                </div>
                <Button variant="primary" className="w-30">
                  BUY TICKET
                </Button>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Intro;
