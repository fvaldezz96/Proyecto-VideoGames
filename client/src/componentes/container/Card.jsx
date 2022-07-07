import React from 'react';
import '../style.css/Card.css';

function Card({ image, name, genres, rating }) {
     const genero = genres.map((e) => e.name)
     return (
          <div className="card">
               <img className="imagen" src={image} alt="img and videogame" />
                    <div>
                         <h2 className='name'>{name}</h2>
                         <p className='genero'>{genero.join(", ")}</p>
                         <p className='rating'><i>{rating}</i></p>
                    </div>
          </div>
     )

}

export default Card; 