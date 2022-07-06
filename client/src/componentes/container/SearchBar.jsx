import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameVideogames } from '../../redux/index';
import '../style.css/SearchBar.css';

export default function SearchBar() {

   const dispatch = useDispatch();
   const [name, setName] = useState("");

   function handleChange(e) {
      e.preventDefault();
      setName(e.target.value);
   }
   function handleSubmit(e) {
      e.preventDefault();
      dispatch(getNameVideogames(name));
      setName("");
   }


   return (
      <div>
         <form
            className="contenedor"
            onSubmit={(e) => handleSubmit(e)}
         >
            <div className="container-3">
               <input
                  type="search"
                  id="search"
                  value={name}
                  onChange={(e) => handleChange(e)}
                  placeholder="Buscar..."
               />
               {/* <button className='boton' type='submit'>
                  Ir
               </button> */}
            </div>
         </form>
      </div>
   )
}
{/* <div class="container-3">
   <span class="icon"><i class="fa fa-search"></i></span>
   <input type="search" id="search" placeholder="Search..." />
</div> */}
