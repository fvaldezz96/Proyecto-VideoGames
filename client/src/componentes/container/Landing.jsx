import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style.css/Landing.css';

export default function Landing() {
     const history = useHistory();
     return (
          <div>
               <h1 className='titulo'>Hola Bienvenido a Videogames!</h1>
               <div className='boton'>
                    {/* <Link to="/home"> */}
                         <button onClick={() => history.push("/home")}>Inicio</button>
                    {/* </Link> */}
               </div>
          </div>
     )
}

