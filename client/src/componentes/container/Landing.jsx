import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
     return (
          <div>
               <h1 className='titulo'>Hola Bienvenido a Videogames!</h1>
               <div className='boton'>
                    <Link to="/home">
                         <button >Inicio</button>
                    </Link>
               </div>
          </div>
     )
}

