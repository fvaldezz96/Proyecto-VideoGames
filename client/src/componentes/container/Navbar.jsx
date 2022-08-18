import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterByGenres } from '../../redux/index';
import '../style.css/Navbar.css';

export default function Navbar({
   handleFilterCreated,
   handleSortByRating,
   handleSortByName
}) {
   const dispatch = useDispatch();
   const genres = useSelector((state) => state.genres);

   function handleFilter(e) {
      dispatch(getFilterByGenres(e.target.value))
   }
   return (
      <div >
         <div >
            <select onChange={(e) => { handleSortByName(e) }}>
               <option disabled>Orden</option>
               <option value="Asc">A-Z</option>
               <option value="Dsc">Z-A</option>
            </select>
            <select onChange={(e) => { handleSortByRating(e) }}>
               <option disabled="disabled"> Rating </option>
               <option value="All">Todos</option>
               <option value="Higth">Mayor puntuación</option>
               <option value="Low">Menor puntuación</option>
            </select>
            <select
               name="genres"
               className=""
               onChange={(e) => {
                  handleFilter(e)
               }}
            >
               <option value="All">
                  Todos los Géneros
               </option>
               {genres &&
                  genres.map((genre) => (
                     <option
                        className=""
                        key={genre.id}
                        value={genre.name}
                     >
                        {genre.name}
                     </option>
                  ))}
            </select>
            <select onChange={(e) => { handleFilterCreated(e) }}>
               <option value="All"> Todos </option>
               <option value="Created">Creados </option>
               <option value="Api"> Existentes</option>
            </select>
         </div>
      </div>
   )
};


//caso que necesite las plataformas y demas

// <select
// className={styles.filters}
// onChange={(e) => {
//   handleFilter(getFilterByPlatforms, e);
// }}
// name="platforms"
// >
// <option
//   className={styles.options}
//   selected={true}
//   disabled="disabled"
//   value=""
// >
//   Choose a platform
// </option>
// {platforms &&
//   platforms.map((platform) => (
//     <option
//       className={styles.options}
//       key={platform.id}
//       value={platform.id}
//     >
//       {platform.name}
//     </option>
//   ))}
// </select>