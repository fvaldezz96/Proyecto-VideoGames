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
   // console.log(genres);

   function handleFilter(e) {
      dispatch(getFilterByGenres(e.target.value))
   }

   return (
      <div className="contenedor">
         <div>
            <select
               onChange={(e) => { handleSortByName(e) }}
            >
               <option className="" disabled>Orden</option>
               <option className="" value="Asc">A-Z</option>
               <option className="" value="Dsc">Z-A</option>

            </select>

            <select
               onChange={(e) => { handleSortByRating(e) }}
            >
               <option className='' disabled="disabled"> Rating </option>
               <option className='' value="All">Todos</option>
               <option className='' value="Higth">Mayor puntuacion</option>
               <option className='' value="Low">Menor puntuacion</option>
            </select>
            <select
               name="genres"
               className=""
               /* Una función que se llama cuando se cambia la selección. */
               onChange={(e) => {
                  handleFilter(e)
               }}
            >
               <option
                  className=''
                  value="All"
               >
                  Todos los Genero
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

            <select
               className=""
               onChange={(e) => { handleFilterCreated(e) }}
            >
               <option className='' value="All"> Todos </option>
               <option className='' value="Db">Creados </option>
               <option className='' value="Api"> Existente</option>

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