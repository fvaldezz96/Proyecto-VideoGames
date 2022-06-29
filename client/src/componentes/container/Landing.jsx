import React from 'react';
import imagen from './image/imagenDeFondo.jpg';
function Landing() {
     return (
          <div>
               <h1 className='titulo'>Hola Bienvenido a Videogames!</h1>
               <img src={imagen} alt="img not found" />
               <div className='boton'>
                    <button >Inicio</button>
               </div>
          </div>
     )
}

export default Landing; 