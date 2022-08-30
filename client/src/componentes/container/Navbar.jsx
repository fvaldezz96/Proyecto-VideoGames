import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterByGenres, getFilterByPlatforms } from '../../redux';
import '../style.css/Navbar.css';

export default function Navbar({
   handleFilterCreated,
   handleSortByRating,
   handleSortByName
}) {
   const dispatch = useDispatch();
   const genres = useSelector((state) => state.genres);
   const platforms = useSelector((state) => state.platforms)

   function handleFilter(e) {
      dispatch(getFilterByGenres(e.target.value));
   }
   function handleFilterPlatforms(e) {
      dispatch(getFilterByPlatforms(e.target.value));
   }

   return (
      <div >
         <div >
            <select onChange={(e) => { handleSortByName(e) }}>
               <option className='options'>Order</option>
               <option value="Asc">A-Z</option>
               <option value="Dsc">Z-A</option>
            </select>
            <select onChange={(e) => { handleSortByRating(e) }}>
               <option className='options' value="All">Rating</option>
               <option value="Higth">highest score</option>
               <option value="Low">lower score</option>
            </select>
            <select name="genres" onChange={(e) => { handleFilter(e) }}>
               <option className='options' value="All">All Genres</option>
               {genres?.map((genre) => (
                  <option key={genre.id} value={genre.name} >
                     {genre.name}
                  </option>
               ))}
            </select>
            <select onChange={(e) => { handleFilterPlatforms(e) }} name="platforms">
               <option className="options" value="All">Choose a platforms</option>
               {platforms?.map((platform) => (
                  <option key={platform.id} value={platform.id}>
                     {platform.name}
                  </option>
               ))}
            </select>
            <select onChange={(e) => { handleFilterCreated(e) }}>
               <option className='options' value="All"> All Videogames </option>
               <option value="Created">Create</option>
               <option value="Api">Existing</option>
            </select>
         </div>
      </div>
   )
};

