import React from 'react';
import './Card.css'

function Card({ image, name, genre, rating }) {
     return (
          <div className="card">
               <h1 calssName='name'><i>{name}</i></h1>
               <div className='img'>
                    <img src={image} alt="img and videogame" />
               </div>
               <h3 className='rating'><i>{rating}</i></h3>
               <h4><i>{genre}</i></h4>
          </div>
     )
}

export default Card; 