// Me importo las acciones y creo las funciones
import { GET_VIDEOGAME, GET_VIDEOGAME_DATAIL, CREATE_VIDEOGAME, DELETE_VIDEOGAME, ORDER_NAME, GET_GENRE, GET_PLATFORM, ORDER_RATING, GET_GAME_NAME, FILTER_CREATED, FILTER_GENRE } from './actions.js';

import axios from 'axios';
//Action creators
/**
 * Devuelve una función que toma una función de envío como argumento y luego devuelve una función
 * asíncrona que llama a la API y luego envía una acción con la respuesta de la API como carga útil.
 * @returns una función que devuelve un envío.
 */
export default function getVideogame() {
     // en este caso tengo que llamar a la api para poder traeme todos los videogame
     return async function (dispatch) { //closure
          const api = await axios.get("http://localhost:3001/videogame", {})
          //   console.log(api.data)
          return dispatch({
               type: GET_VIDEOGAME,
               payloand: api.data
          })
     }
}
//function para hacer el pedido a la api y despachar la function 
// export default function getVideogame() {
//      return function (dispatch) {
//           return fetch("http://localhost:3001/videogame").then(res => res.json()).then(res => dispatch({ type: GET_VIDEOGAME, payloand: res }))
//      }
// }


/**
 * Es una función asíncrona que devuelve una función que toma una función de envío como argumento.
 * La función interna es la que realmente hace el trabajo. Utiliza la función de envío para enviar una
 * acción a la tienda Redux.
 * La acción es un objeto con un tipo y una carga útil. El tipo es una cadena que identifica la acción.
 * La carga útil son los datos que lleva la acción.
 * La acción se envía a la tienda Redux. La tienda luego pasa la acción al reductor
 * El reductor es una función que toma el estado actual y la acción como argumentos y devuelve el
 * siguiente estado.
 * El reductor es la única función que puede cambiar el estado.
 *
 * @returns una función que devuelve una promesa.
 */
export default function getGenre() {
     return async function (dispatch) {
          const genero = await axios.get("http://localhost:3001/genre")
          return dispatch({
               type: GET_GENRE,
               payloand: genero.data
          })
     }
}
/**
 * Es una función asíncrona que devuelve una función que toma una función de envío como argumento.
 * La función interna es la que realmente despacha la acción.
 * La función externa es la que llama el middleware thunk. !!!!!!
 * El middleware thunk pasa la función de envío a la función interna.
 * @param id - la id del videojuego
 * @returns un objeto con un tipo y una carga útil.
 */
export default function getVideoDetail(id) {
     return async function (dispatch) {
          try {
               const detail = await axios.get(`http://localhost:3001/${id}`)
               return dispatch({
                    type: GET_VIDEOGAME_DATAIL,
                    payloand: detail.data
               })
          } catch (error) {
               // console.log(error)
          }
     }


}
export default function getPlatform() {
     return async function (dispatch) {
          const consola = await axios.get("http://localhost:3001/videogame")
          return dispatch({
               type: GET_PLATFORM,
               payloand: consola.data
          })
     }
}
/**
 * Es una función que devuelve una función que devuelve una promesa que devuelve un objeto.
 * @param payloand - {
 * @returns La función está siendo devuelta.
 */// este payloand es que recibo del form del front 
export default function createVideogame(payloand) {
     return async function () {
          const crear = await axios.post("http://localhost:3001/videogame", payloand)
          // console.log(crear.data)
          return {
               type: CREATE_VIDEOGAME,
               payloand: crear
          };
     }
}
export default function filterCreated(payloand) {
     return {
          type: FILTER_CREATED,
          payloand: payloand
     }
}

export default function deleteVideogame(id) {
     return async function (dispatch) {
          try {
               const eliminar = await axios.delete(`http://localhost:3001/videogame/${id}`)
               return dispatch({
                    type: DELETE_VIDEOGAME,
                    payloand: eliminar.data
               });
          } catch (error) {
               console.log(error)
          }
     }
}
export default function filterGenres(payloand) {
     return {
          type: FILTER_GENRE,
          payloand
     }
}
// export default function filterVideogame(payloand) {
//      return {
//           type: FILTER_VIDEOGAME,
//           payloand
//      }
// }
export default function orderAlphabetic(payloand) {
     return {
          type: ORDER_NAME,
          payloand
     }

}
export default function orderRating(payloand) {
     return {
          type: ORDER_RATING,
          payloand
     }

}
//este me permite buscar por el searchbar !!!! 

/**
 * Es una función asíncrona que devuelve una función que toma una función de envío como parámetro.
 * La función interna es la que realmente hace el trabajo. Es una función asíncrona que realiza una
 * llamada a la API y luego envía una acción con los resultados de la llamada a la API.
 * 
 * La función externa es solo un contenedor que facilita el uso de la función interna con redux-thunk.
 * La función externa se llama thunk.
 * La función interna se llama creador de acción thunk.
 * @param name - El nombre del juego que desea buscar.
 * @returns una función asíncrona que va a enviar una acción.
 */
export default function getGameName(name) {
     return async function (dispatch) {
          try {
               const results = await axios.get("http://localhost:3001/videogame?name=" + name);
               dispatch({
                    type: GET_GAME_NAME,
                    payloand: results.data
               });
          } catch (error) {
               console.log("No se encontro el videogame");
          }
     }
}





// export function getDetails(id) {
//      return function(dispatch) {
//        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
//          .then(response => response.json())
//          .then(json => {
//            dispatch({ type: "GET_DETAILS", payload: json });
//          });
//      };
//    }