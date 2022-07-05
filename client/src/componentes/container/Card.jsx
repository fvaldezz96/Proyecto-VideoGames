import React from 'react';

function Card({ image, name, genres, rating }) {
     const genero = genres.map((e) => e.name)
     return (

          <div className="card">

               <h1 className='name'><i>{name}</i></h1>
               <div className='img'>
                    <img src={image} alt="img and videogame" />
               </div>
               <h3 className='rating'><i>{rating}</i></h3>
               <h4>{genero.join(", ")}</h4>
          </div>
     )
}

export default Card; 