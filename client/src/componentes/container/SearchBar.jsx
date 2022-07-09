import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameVideogames } from '../../redux/index';
import '../style.css/SearchBar.css';

export default function SearchBar() {

   const dispatch = useDispatch();
   const [name, setName] = useState("");

   /**
    * La función handleChange toma un evento como argumento, evita la acción predeterminada y establece
    * el estado del nombre en el valor del objetivo.
    */
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
            className="contenedorSearch"
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
               <button className='botonIr' type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
         </form>
      </div>
   )
}
{/* <div class="container-3">
   <span class="icon"><i class="fa fa-search"></i></span>
   <input type="search" id="search" placeholder="Search..." />
</div> */}
