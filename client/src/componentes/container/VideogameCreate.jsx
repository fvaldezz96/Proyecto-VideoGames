import React from 'react';
import { createVideogame, getGenre, getPlatform } from '../../redux/index';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


function VideogameCreate() {

     const dispatch = useDispatch()
     /* Conseguir el estado del género. */
     const gamesG = useSelector((state) => state.genre)
     const gamesP = useSelector((state) => state.platform)

     /* Crear una matriz de valores únicos a partir de la matriz de plataformas. */
     const platformsList = Array.from(new Set((gamesP.map((el) => el.platforms)).flatMap(x => x)))

     const [error, setError] = useState({});
     /* Creación de un objeto de estado con las propiedades del videojuego. */
     const [input, setInput] = useState({
          name: "",
          description: "",
          released: "",
          rating: 0,
          platform: [],
          genre: []
     })

     /* Un gancho que se utiliza para realizar efectos secundarios en componentes de función. Es un
     reemplazo cercano para el componenteDidMount, el componenteDidUpdate y el componenteWillUnmount
     en las clases de React. esto es en el caso del componente de clase ==> https://es.reactjs.org/docs/forms.html */
     useEffect(() => {
          dispatch(getGenre())
     }, [dispatch])

     useEffect(() => {
          dispatch(getPlatform())
     }, [dispatch])

     const nombreValido = /^[a-zA-Z ]*$/

     async function handleSubmit(e) {
          e.preventDefault()
     }

     function handleChange(e) {
          e.preventDefault()
     }
     function handleSelectGenre() {

     }
     function handleSelectPlatform() {

     }
     function handleDeleteGame() {

     }

     //https://react-hook-form.com/api/useform/handlesubmit
     return (
          <div className='contenedor'>
               <div className='formulario'>
                    <form >
                         <label>
                              Nombre:
                              <input type="text" value='' />
                         </label>

                         <label>Description</label>
                         <input type="text" />

                         <label>Fecha</label>
                         <input type="text" />

                         <label>Rating</label>
                         <input type="text" />

                         <label>Plataforma</label>
                         <input type="text" />

                         <label>Imagen</label>
                         <div className='imagen'>
                              <img src="" alt="buscar imagen en carpeta" />
                         </div>
                    </form>
               </div>
          </div>
     )
}
export default VideogameCreate;