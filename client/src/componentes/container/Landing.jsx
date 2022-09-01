import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css/Landing.css';

export default function Landing() {

     return (
          <div className='contenedor'>
               <div className="tituloLanding">
                    <h1 className="ejemplo">welcome to videogames</h1>
                    <div className='containerButtonLanding'>
                         <Link to={'/home'}>
                              <button className="CTA">PLAY</button>
                         </Link>
                    </div>
               </div>
          </div>
     )
}

