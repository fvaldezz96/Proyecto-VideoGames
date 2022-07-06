
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Card from './Card';
import { Link } from 'react-router-dom';
import '../style.css/Home.css';

import {
   getVideogame,
   filterCreated,
   getGenres,
   orderByName,
   orderByRating,
   // getPlatforms,
   resetVideogameDetail,
} from '../../redux/index';

// import VideogameDetail from './VideogameDetail';
// import VideogameCreate from './VideogameCreate';

export default function Home() {
   const dispatch = useDispatch();
   const allVideogames = useSelector((state) => state.videogames);

   const [currentPage, setCurrentPage] = useState(1);
   const [videogamesPerPage, setVideogamesPerPage] = useState(15);

   const indexOfLastVideogame = currentPage * videogamesPerPage;
   const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;

   const currentVideogames = allVideogames.slice(
      indexOfFirstVideogame,
      indexOfLastVideogame
   );
   // console.log(currentVideogames);

   const [order, setOrder] = useState("");
   /**
    * Cuando el usuario hace clic en un número de página, el número de página actual se establece en el
    * número de página en el que se hizo clic.
    */
   const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
   };


   function handleFilterCreated(e) {
      e.preventDefault();
      dispatch(filterCreated(e.target.value));
      setCurrentPage(1);
      setOrder(e.target.value);
   }
   /**
    * Cuando el usuario hace clic en el botón ordenar por nombre, se envía la acción orderByName, la
    * página actual se establece en 1 y el orden se establece en el valor del botón en el que se hizo
    * clic.
    */
   function handleSortByName(e) {
      dispatch(orderByName(e.target.value));
      setCurrentPage(1);
      setOrder(e.target.value);
   }
   /**
    * Cuando el usuario hace clic en el menú desplegable de calificación, se envía la acción
    * orderByRating, la página actual se establece en 1 y el orden se establece en el valor del menú
    * desplegable.
    */
   function handleSortByRating(e) {
      dispatch(orderByRating(e.target.value));
      setCurrentPage(1);
      setOrder(e.target.value);
   }
   useEffect(() => {
      dispatch(getVideogame());
      dispatch(getGenres());
      // dispatch(getPlatforms());
      dispatch(resetVideogameDetail())
   }, [])

   return (
      <div>
         <SearchBar />
         <Link to='/videogameCreate'>
            <button>Crear juego</button>
         </Link>
         <div>
            <Navbar
               handleFilterCreated={handleFilterCreated}
               handleSortByName={handleSortByName}
               handleSortByRating={handleSortByRating}
            />
            <Paginado
               videogamesPerPage={videogamesPerPage}
               allVideogames={allVideogames.length}
               paginado={paginado}
            />
         </div>
         {currentVideogames && currentVideogames.map((e) => {
            // console.log(e)
            return (
               <Link to={`/videogame/${e.id}`}>
                  <Card
                     key={e.id}
                     name={e.name}
                     image={e.img}
                     genres={e.genres}
                     rating={e.rating}
                  />
               </Link>
            )
         })}

      </div>
   )
}

