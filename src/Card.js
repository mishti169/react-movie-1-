import React, { useEffect } from 'react';
import './Card.css';
import Button from './Button';
function Card(props) {
  console.log('hello');

  return (
    <div
      className="movie-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${
          props.imgSrc || 'https://wallpaperaccess.com/full/288744.jpg'
        })`,
      }}
    >
      <div className="movie-container-element">
        <div className="movie-detail-wrapper">
          <span className="movie-rate">{props.rating}</span>
          <span className="movie-title">{props.title}</span>
          <div>
            <span className="movie-yearGenre">{props.year},</span>
            <span className="movie-yearGenre">{props.genre}</span>
          </div>
        </div>
        <p className="movie-description">{props.description}</p>
        <Button text="Watch thriller" variant="danger" />
      </div>
    </div>
  );
}
export default Card;
