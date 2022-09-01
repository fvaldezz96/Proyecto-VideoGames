import React from 'react';
import '../style.css/Card.css';

function Card({ platforms, background_image, name, genres, rating }) {
     const genero = genres.map((e) => e.name);
     const plataformas = platforms?.map((p) => p.name);
     return (
          <div className="card">
               <div className="containerImg">
                    <img className="background_image" src={background_image} alt="img and videogame" />
               </div>
               <h2 className='name'>{name}</h2>
               <div>
                    <p className='genero'>Genres: {genero.join(", ")}</p>
                    <p className='platforms'>Platforms: {plataformas.join(", ")}</p>
               </div>
               <div>
                    <p className='rating'>{rating}</p>
               </div>
          </div>
     )
}

export default Card; 