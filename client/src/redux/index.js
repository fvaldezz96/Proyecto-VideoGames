// Me importo las acciones y creo las funciones


import axios from 'axios';
import {
     FILTER_BY_GENRE,
     FILTER_BY_PLATFORM,
     RESET_DETAILS,
     RESET_FILTERS,
} from './actions.js';

//Action creators
/**
 * Devuelve una función que toma una función de envío como argumento y luego devuelve una función
 * asíncrona que llama a la API y luego envía una acción con la respuesta de la API como carga útil.
 * @returns una función que devuelve un envío.
 */
export function getVideogame() {
     // en este caso tengo que llamar a la api para poder traeme todos los videogame
     return async function (dispatch) { //closure
          const videogamesData = await axios.get(
               "http://localhost:3001/videogame",
               {}
          )
          //   console.log(api.data)
          return dispatch({
               type: "GET_VIDEOGAMES",
               payloand: videogamesData.data
          })
     }
}
//function para hacer el pedido a la api y despachar la function 
// export function getVideogame() {
//      return function (dispatch) {
//           return fetch("http://localhost:3001/videogame").then(res => res.json()).then(res => dispatch({ type: GET_VIDEOGAME, payloand: res }))
//      }
// }



export function getNameVideogames() {
     return async function (dispatch) {
          try {
               const namesData = await axios.get("http://localhost:3001/videogames?name=" + name)
               return dispatch({
                    type: "GET_NAME_VIDEOGAMES",
                    payloand: namesData.data
               })
          } catch (error) {
               alert("no encontramos el nombre de su juego")
          }
     }
}

export function getVideogameDetail(id) {
     return async function (dispatch) {
          try {
               const detail = await axios.get(`http://localhost:3001/videogame/${id}`)
               return dispatch({
                    type: "GET_VIDEOGAME_DATAIL",
                    payloand: detail.data
               })
          } catch (error) {
               // console.log(error)
          }
     }


}
export function getPlatform() {
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
export function createVideogame(payloand) {
     return async function () {
          const crear = await axios.post("http://localhost:3001/videogame", payloand)
          // console.log(crear.data)
          return {
               type: CREATE_VIDEOGAME,
               payloand: crear
          };
     }
}

export function filterCreated(payloand) {
     return {
          type: FILTER_CREATED,
          payloand: payloand
     }
}

// export function deleteVideogame(id) {
//      return async function (dispatch) {
//           try {
//                const eliminar = await axios.delete(`http://localhost:3001/videogame/${id}`)
//                return dispatch({
//                     type: DELETE_VIDEOGAME,
//                     payloand: eliminar.data
//                });
//           } catch (error) {
//                console.log(error)
//           }
//      }
// }
export function filterGenres(payloand) {
     return {
          type: FILTER_GENRE,
          payloand
     }
}
// export function filterVideogame(payloand) { //esta opcion no la puedo usar por que no puedo 
//filtrar juegos de la api
//      return {
//           type: FILTER_VIDEOGAME,
//           payloand
//      }
// }

export function orderAlphabetic(payloand) {
     return {
          type: ORDER_NAME,
          payloand
     }

}
export function orderRating(payloand) {
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
export function getGameName(name) {
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