import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameVideogames } from '../../redux/index';
import '../style.css/SearchBar.css';

export default function SearchBar() {

   const dispatch = useDispatch();
   const [name, setName] = useState("");


   function handleSubmit(e) {
      e.preventDefault();
      dispatch(getNameVideogames(name));
      // console.log(getNameVideogames())
      setName("");
   }

   function handleChange(e) {
      e.preventDefault();
      setName(e.target.value);
   }

   return (
      <div className="contenedorSearch">
         <div className="container-3">
            <input
               type="text"
               id="search"
               value={name}
               onChange={(e) => handleChange(e)}
               placeholder="Buscar..."
            />
            {/* {} */}
            <button className='botonIr' type='submit' onClick={(e) => handleSubmit(e)}><i className="fa-solid fa-magnifying-glass"></i></button>
         </div>
      </div>
   )
}

