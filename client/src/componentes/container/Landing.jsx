import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style.css/Landing.css';

export default function Landing() {
     const history = useHistory();

     function handleChange(e) {
          e.preventDefault(e);
     }

     return (
          <div className="contenedor">
               <h1 className='title'>Bienvenidos a Videogames</h1>
               <div>
                    <a className="button" alt="Inicio" onChange={(e) => { handleChange(e) }} onClick={() => history.push("/home")}></a>
               </div>
          </div >
     )
}

