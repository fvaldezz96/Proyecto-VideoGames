
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

   const [order, setOrder] = useState("");
   const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
   };

   function handleFilterCreated(e) {
      e.preventDefault();
      dispatch(filterCreated(e.target.value));
      setCurrentPage(1);
      setOrder(e.target.value);
   }

   function handleSortByName(e) {
      dispatch(orderByName(e.target.value));
      setCurrentPage(1);
      setOrder(e.target.value);
   }

   function handleSortByRating(e) {
      dispatch(orderByRating(e.target.value));
      setCurrentPage(1);
      setOrder(e.target.value);
   }

   function handleReset(e) {
      e.preventDefault();
      dispatch(getVideogame());
   }

   useEffect(() => {
      dispatch(getVideogame());
      dispatch(getGenres());
      dispatch(resetVideogameDetail())
      // dispatch(getPlatforms());
   }, [])

   return (
      <div className='primerContenedor'>
         <div className='buscador'>
            <SearchBar />
         </div>

         <div className='botones'>
            <button className='actualizar' onClick={(e) => handleReset(e)}><i className="fa-solid fa-arrows-rotate"></i></button>
            <Link to='/videogameCreate'>
               <button className='crear' >crear juego</button>
            </Link>
         </div>
         <div>
            <Navbar
               handleFilterCreated={handleFilterCreated}
               handleSortByName={handleSortByName}
               handleSortByRating={handleSortByRating}
            />
         </div>
         <div>
            <Paginado
               videogamesPerPage={videogamesPerPage}
               allVideogames={allVideogames.length}
               paginado={paginado}
            />
         </div>
         <div className='Card'>
            {currentVideogames && currentVideogames.map((e,index) => {
               return (
                  <div key={index}>
                     <Link to={`/videogame/${e.id}`}>
                        <Card
                           name={e.name}
                           image={e.img}
                           genres={e.genres}
                           rating={e.rating}
                        />
                     </Link>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

