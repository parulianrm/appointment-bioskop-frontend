import React, { useEffect, useState } from 'react';
import './movieList.css';
import { useParams } from 'react-router-dom';
import Cards from '../cards/cards';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">
        {(type ? type : 'ON CINEMA').toUpperCase()}
      </h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
