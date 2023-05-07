// card.js
import React, { useEffect, useState } from "react"
import "./cards.css"
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';

const Cards = ({ movie, onBuyTicket }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <div className="cards">
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
        <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
        <div className="cards__overlay">
          <div className="card__title">{movie ? movie.original_title : ""}</div>
          <Button
                  variant="primary"
                  className="w-100"
                >
                  BUY TICKET
                </Button>
        </div>
      </Link>
    </div>
  )
}

export default Cards
