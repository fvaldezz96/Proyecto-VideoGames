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

   return (
      <div className="contenedor">
         <div>
            <select
               onCanPlay={(e) => handleSortByName(e)}
            >
               <option className="" selected="false" disabled>Orden</option>
               <option className="" value="Asc">A-Z</option>
               <option className="" value="Dsc">Z-A</option>

            </select>
            

         </div>
      </div>
   )
};