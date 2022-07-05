import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterByGenres } from '../../redux/index';

export default function Navbar({
   handleFilterCreated,
   handleSortByRating,
   handleSortByName
}) {

   const dispatch = useDispatch();
   const genres = useSelector((state) => state.genres);

   function handleFilter(funcion, e) {
      dispatch(funcion(e.target.value))
   }

   return (
      <div className="contenedor">
         <div>
            <select
               onChange={(e) => handleSortByName(e)}
            >
               <option className="" selected="false" disabled>Orden</option>
               <option className="" value="Asc">A-Z</option>
               <option className="" value="Dsc">Z-A</option>

            </select>

            <select
               onChange={(e) => handleSortByRating(e)}
            >
               <option className='' selected={true} disabled="disabled">
                  Rating
               </option>
               <option className='' value="All">Todos</option>
               <option value="Higth">Mayor puntuacion</option>
               <option value="Low">Menor puntuacion</option>
            </select>
            <select
               name="genres"
               className=""
               /* Una función que se llama cuando se cambia la selección. */
               onChange={(e) => {
                  handleFilter(getFilterByGenres, e)
               }}
            >
               <option
                  className=''
                  value=""
                  selected={true}
                  distabled="distabled"
               >
                  Elige un genero

               </option>
               {genres && genres.map((gJuego) => (
                  <option
                     className=''
                     key={gJuego.id}
                     value={gJuego.name}
                  >
                     {gJuego.name}
                  </option>
               ))}
            </select>

            <select
               className=""
               onChange={(e) => handleFilterCreated(e)}
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