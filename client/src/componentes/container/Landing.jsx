import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style.css/Landing.css';

export default function Landing() {
     const history = useHistory();

     function handleChange(e) {
          e.preventDefault(e);
     }

     return (
          <div className="container-fluid" onChange={(e) => handleChange(e)}>
               <div className="row home">
                    <div className="col-md-12 splash">
                         <a href='title not found'>
                              <div className="intro">
                                   <h1 className='tituloPagina'>Bienvenido a Videogames</h1>
                              </div>
                              <a href='title not found' className="btn btn-default CTA" alt="play" onClick={() => {history.push('/home')}}> </a>
                              <div className="sub">
                                   <p></p>
                              </div>
                         </a>
                    </div>
               </div>
          </div>
     )
}

