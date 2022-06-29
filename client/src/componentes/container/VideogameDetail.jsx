import React from 'react';
import { getVideoDetail } from '../../redux/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function VideogameDetail() {
     const dispatch = useDispatch();
     /* Obtener el estado de la tienda redux.*/
     /* Un gancho que se utiliza para realizar efectos secundarios
      en componentes de función. */
     useEffect(() => {
          dispatch(getVideoDetail(id)
          )
     }, [dispatch])

     const games = useSelector((state) => state.detail)

     return (
          <div className='detailBody'>{
               games ?
                    <div className='contenedor'> 

                         <div className='nombre'>
                              <h1>{games.name ? games.name : 'Nombre no encontrado'}</h1>
                         </div>

                         <div className='imagen'>
                              <img src={games.image ? games.image : 'Imagen no encontrada'} alt="img videogame" />
                         </div>
                     
                         <div className='otrosDatos'>
                              <div className='genre'>
                                   <h4>GENRE</h4>
                                   <p className='genreP'>{games.genre ? games.genre : 'Genero no encontrado'}</p>
                              </div>
                              <div className='fecha'>
                                   <h4>FECHA</h4>
                                   <p className='fechaP'>{games.released ? games.released : 'No encontramos esta fecha'}</p>
                              </div>
                              <div className='platform'>
                                   <h4>PLATFORM</h4>
                                   <p className='platformP'>{games.platform ? games.platform : 'No esta disponible en esta plataforma'}</p>
                              </div>
                              <div className='rating'>
                                   <h4>RATING</h4>
                                   <p className='raingP'>{games.rating ? games.rating : games.rating}</p>
                              </div>
                         </div>
                    </div>
                    :
                    <div className='parent'>
                         <img src='direccion de imagen ' alt="GAME NOT FOUND" className='imgApi' />
                    </div>
          }
          </div>

     )
}
export default VideogameDetail;
