import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameVideogames } from '../../redux/index';


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
         <Form
            className=""
            onSubmit={(e) => handleSubmit(e)}
         >
            <div className=''>
               <input
                  type="text"
                  className=""
                  value={name}
                  onChange={(e) => handleChange(e)}
                  placeholder="Buscar..."
               />
               <button className='' type='submit'>
                  <FaSearch size={20} />
               </button>
            </div>
         </Form>
      </div>
   )
}
