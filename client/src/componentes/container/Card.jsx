import React from 'react';
import '../style.css/Card.css';

function Card({ platforms, background_image, name, genres, rating }) {
     const genero = genres.map((e) => e.name);
     const plataformas = platforms?.map((p) => p.name);
     return (
          <div className="card">
               <h2 className='name'>{name}</h2>
               <img className="background_image" src={background_image} alt="img and videogame" />
               <div>
                    <p className='platforms'>Platforms: {plataformas.join(", ")}</p>
                    <p className='genero'>Genres: {genero.join(", ")}</p>
                    <p className='rating'><i>{rating}</i></p>
               </div>
          </div>
     )
}

export default Card; 