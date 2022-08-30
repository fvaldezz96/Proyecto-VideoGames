import React, { useEffect } from "react";
import { getVideogameDetail } from '../../redux/index';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.css/VideogameDetail.css';

export default function VideogameDetail(props) {

   const dispatch = useDispatch();
   const { id } = props.match.params;

   const videogameDetail = useSelector((state) => state.videogameDetail)
   useEffect(() => {
      dispatch(getVideogameDetail(id)
      )
   }, [dispatch, id])

   return (
      <div>
         <Link to="/home">
            <button className="botonVolver">volver</button>
         </Link>
         <div className="detalle">
            {videogameDetail ? (
               <div>
                  <h2 className="nombreDetalle">{videogameDetail.name}</h2>
                  <div className='container-image'>
                     <img
                        alt="nice"
                        className="imagenes"
                        src={
                           videogameDetail.background_image ||
                           "https://www.acbar.org/Website/Loader/loader3.gif"
                        }
                     />
                  </div>
                  <div className='container-parrafos'>
                     <p className="parrafos">{videogameDetail.genres?.map((g) => g.name).join(", ")}</p>{" "}
                     <p className="description"> {videogameDetail.description_raw || videogameDetail.description}</p>
                     <p className="parrafos"> {videogameDetail.released || "None"}</p>
                     <p className="parrafos">★{videogameDetail.rating}</p>
                  </div>
               </div>
            ) : (
               <h5>no se encontro el detalle</h5>
            )}
         </div>

      </div>
   )
};

