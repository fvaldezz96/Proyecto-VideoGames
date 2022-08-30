
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
   getPlatforms,
   resetVideogameDetail,
} from '../../redux/index';

export default function Home() {

   const dispatch = useDispatch();
   const allVideogames = useSelector((state) => state.videogames);
   // eslint-disable-next-line
   const [order, setOrder] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   // eslint-disable-next-line
   const [videogamesPerPage, setVideogamesPerPage] = useState(15);

   const indexOfLastVideogame = currentPage * videogamesPerPage;
   const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;

   const currentVideogames = allVideogames.slice(
      indexOfFirstVideogame,
      indexOfLastVideogame
   );

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
      dispatch(getPlatforms());
   }, [dispatch])

   return (
      <div className='primerContenedor'>
         <div className='navBarContainer'>
            <div className='botones'>
               <button className='crear' onClick={(e) => handleReset(e)}><i className="fa-solid fa-arrows-rotate"></i></button>
               <Link to='/videogameCreate'>
                  <button className='crear'>Create Videogames</button>
               </Link>
                  <SearchBar />
            </div>
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
         <div className='Card'>
            {currentVideogames?.map((e, index) => {
               return (
                  <div key={index}>
                     <Link to={`/videogame/${e.id}`}>
                        <Card
                           name={e.name}
                           background_image={e.background_image}
                           genres={e.genres}
                           rating={e.rating}
                           platforms={e.platforms}
                        />
                     </Link>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

