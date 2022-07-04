import React from 'react';
import { getVideogameDetail } from '../../redux/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function detail(props) {

   const dispatch = useDispatch();
   const { id } = props.match.params;

   /* Un gancho que se utiliza para realizar efectos secundarios en componentes de función. Es un
   reemplazo cercano para el componenteDidMount, el componenteDidUpdate y el componenteWillUnmount
   en las clases de React. */
   useEffect(() => {
      dispatch(getVideogameDetail(id)
      )
   }, [id, dispatch])

   const videogameDetail = useSelector((state) => state.VideogameDetail)

   return (
      <div>
         <Link to="/home">
            <button>volver</button>
         </Link>
         {videogameDetail ? (
            <div className=''>
               <img className=''
                  src={
                     videogameDetail.background_image ||
                     "https://m.media-amazon.com/images/I/611fcGzpVUL.jpg"
                  }
                  alt=""
               />
               <div className=''>
                  <p className=''>{videogameDetail.name}</p>
                  <p>
                     <strong>Generos:</strong>{" "}
                     {videogameDetail.genres?.map((g) => g.name).join(",")}
                  </p>
                  <p>
                     <strong>Description:</strong>
                     {videogameDetail.description_raw || videogameDetail.description}
                  </p>
                  <p>
                     <strong>Platafromas:</strong>
                     {videogameDetail.id?.length > 7
                        ? videogameDetail.platforms?.map((p) => p.name).join(", ")
                        : videogameDetail.platforms
                           ?.map((p) => p.platforms.name).join(", ")
                     }
                  </p>
                  <p>
                     <strong>fecha:</strong>
                     {videogameDetail.released || "None"}
                  </p>
                  <p>
                     <strong>Puntuacion: </strong>
                     {videogameDetail.rating}
                  </p>
               </div>
            </div>
         ) : (
            <Spinner />
         )}
      </div>
   )
}

