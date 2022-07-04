
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import VideogameCreate from './VideogameCreate';
import VideogameDetail from './VideogameDetail';
import {
   getVideogames,
   filterByGenre,
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
   const [currentPage, setCurrentPage] = useState(1);
   const [videogamesPerPage, setVideogamesPerPage] = useState(15);

   const indexlastVideogame = currentPage * videogamesPerPage;
   const indexFirstVideogame = indexlastVideogame - videogamesPerPage;
   const currentVideogames = allVideogames.slice(
      indexlastVideogame,
      indexFirstVideogame
   );
   const [order, setOrder] = useState("");
   /**
    * Cuando el usuario hace clic en un número de página, el número de página actual se establece en el
    * número de página en el que se hizo clic.
    */
   const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
   };

  







   return (
      <div>
         <Header title="" />
         <div>
            <SearchBar />
            <Paginado
               videogamesPerPage={videogamesPerPage}
               allVideogames={allVideogames.length}
               paginado={paginado}
            />
            <div className=''>
               <div className=''>
                  <Navbar

                  />
               </div>
               <div>
                  <ul className=''>
                     {currentVideogames && currentVideogames.map((p) => {
                        return (
                           <VideogameDetail
                              id={p.id}
                              name={p.name}
                              key={p.id}
                              img={p.img}
                              genres={p.genres}
                              rating={p.rating}
                              platforms={p.platforms}
                           />
                        )
                     })}
                  </ul>
               </div>
            </div>
            <Paginado
               videogamesPerPage={videogamesPerPage}
               allVideogames={allVideogames}
               paginado={paginado}
            />
         </div>
      </div>
   )
}

