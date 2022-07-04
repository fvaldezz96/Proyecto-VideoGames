import React from 'react';
import { postVideogames, getGenres } from '../../redux/index';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function validaciones(input) {
   const errors = {};
   if (!input.name.trim()) {
     errors.name = "A name is required";
   }
   if (!input.description.trim()) {
     errors.description = "A description is required";
   }
   if (!input.released.trim()) {
     errors.released = "The release date is required";
   }
   return errors;
 }

export default function VideogameCreate() {

   const dispatch = useDispatch()
   const generos = useSelector((state) => state.genres)
   const plataformas = useSelector((state) => state.platforms)
   const [error, setError] = useState({});
   const [input, setInput] = useState({
      name: "",
      description: "",
      released: "",
      rating: "",
      platforms: [],
      genres: [],
   })

   const nombreValido = /^[a-zA-Z ]*$/

   function handleDelete(e) {
      setInput({
         ...input,
         genres: input.genres.filter((g) => g != e)
      })
   }

   function handleSubmit(e) {
      e.preventDefault()
      setError(
         validaciones({
            ...input,
            [e.target.name]: e.target.value
         })
      );
   };
   if (Object.keys(error).length === 0) {
      dispatch(postVideogames(input));
      // alert("Juego creado con exito");
      setInput({
         name: "",
         description: "",
         released: "",
         rating: "",
         platforms: [],
         genres: [],
      })
   } else {
      alert("juego no a podido crearse")
      return;
   }

   function handleChange(e) {
      const { name, value } = e.target;
      setInput({
         ...input,
         [name]: value,
      })
      setError({
         ...input,
         [name]: value,
      })
   }
   function handleSelect(e) {
      setInput({
         ...input,
         genres: [...input.genres, e.target.value]
      })
   }
   function handleDeletePlatform(e) {
      setInput({
         ...input,
         platforms: [...input.platforms.filter((p) => p != e)]
      })
   }
   function handleSelectPlatform(e) {
      setInput({
         ...input,
         platforms: [...input.platforms, e.target.value],
      });
   }
   useEffect(() => {
      dispatch(getGenres());
   }, [])

   //https://react-hook-form.com/api/useform/handlesubmit
   return (
      <div>
         <Link to="/home">
            <button className="">Back</button>
         </Link>
         <main className="">
            <h1 className="">Create your own videogame</h1>

            <div className=""></div>

            <form className="" onSubmit={(e) => handleSubmit(e)}>
               <div className="">
                  <label className="" htmlFor="">
                     Name
                  </label>
                  <input
                     required
                     className=""
                     type="text"
                     name="name"
                     value={input.name}
                     onChange={(e) => handleChange(e)}
                  />
                  {error.name && <h4>{error.name}</h4>}
               </div>
               <div className="">
                  <label className="" htmlFor="">
                     Description
                  </label>
                  <textarea
                     className=""
                     type="text"
                     name="description"
                     value={input.description}
                     onChange={(e) => handleChange(e)}
                  />
                  {error.description && <h4>{error.description}</h4>}
               </div>
               <div className="">
                  <label className="" htmlFor="">
                     Release date
                  </label>
                  <input
                     className=""
                     type="date"
                     name="released"
                     value={input.released}
                     onChange={(e) => handleChange(e)}
                  />
                  {error.released && <h4>{error.released}</h4>}
               </div>
               <div className="">
                  <label className="" htmlFor="">
                     Rating
                  </label>
                  <input
                     className=""
                     type="number"
                     name="rating"
                     value={input.rating}
                     min="0"
                     max="5"
                     onChange={(e) => handleChange(e)}
                  />
               </div>
               <div className="">
                  <label className="" htmlFor="">
                     Platforms
                  </label>
                  <select onChange={(e) => handleSelectPlatform(e)}>
                     {plataformas.map((v) => (
                        <option value={v.name}>{v.name}</option>
                     ))}
                  </select>

                  {input.platforms.map((g) => (
                     <div className="">
                        <p className="">{g}</p>
                        <button onClick={() => handleDeletePlatform(g)}>X</button>
                     </div>
                  ))}
               </div>
               <div className="">
                  <label className="" htmlFor="">
                     Genres
                  </label>
                  <select onChange={(e) => handleSelect(e)} name="genres">
                     <option selected={true} disabled="disabled" value="">
                        Choose a genre
                     </option>
                     {generos &&
                        generos.map((g) => (
                           <option key={g.id} value={g.name}>
                              {g.name}
                           </option>
                        ))}
                  </select>
               </div>
               {input.genres.map((g) => (
                  <div className="">
                     <p className="">{g}</p>
                     <button onClick={() => handleDelete(g)}>X</button>
                  </div>
               ))}
               <button className="" type="submit">
                  Create Videogame
               </button>
            </form>
         </main>
      </div>
   );
}
