import React, { useEffect } from 'react';
import './Card.css';
import Button from './Button';

function Card(props) {
  if (props.cardDesign === 'card1') {
    return (
      <div className="movie-wrapper_card1">
        <div className="movie-wrapper_element_card1">
          <div className="movie-details-wrapper_card1">
            <div className="movie-titleGenreRating_card1">
              <span>DDLJ</span>
              <span>2022,action,thiller,romance</span>
              <span>7.9</span>
            </div>
            <p className="movie-description_card1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <Button text="Watch thriller" variant="danger" />
          </div>
          <div
            className="movie-img-holder_card1"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${
                props.imgSrc || 'https://wallpaperaccess.com/full/288744.jpg'
              })`,
            }}
          ></div>
        </div>
      </div>
    );
  } else if (props.cardDesign === 'card2') {
    return <div></div>;
  } else if (props.cardDesign === 'card3') {
    return <div></div>;
  } else {
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
}
export default Card;
