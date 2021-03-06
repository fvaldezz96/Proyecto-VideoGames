// Me importo las acciones y creo las funciones


import axios from 'axios';
import {
   FILTER_BY_GENRE,
   // FILTER_BY_PLATFORM,
   RESET_DETAILS,
   RESET_FILTERS,
   GET_NAME_VIDEOGAMES,
   GET_VIDEOGAMES,
   GET_VIDEOGAME_DETAIL,
   GET_PLATFORMS,
   GET_GENRES,
   FILTER_CREATED,
   POST_VIDEOGAME,
   ORDER_BY_NAME,
   ORDER_BY_RATING,
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
         "http://localhost:3001/videogames", {})
      //   console.log(api.data)
      return dispatch({
         type: GET_VIDEOGAMES,
         payload: videogamesData.data
      })
   }
}
//function para hacer el pedido a la api y despachar la function 
// export function getVideogame() {
//      return function (dispatch) {
//           return fetch("http://localhost:3001/videogame").then(res => res.json()).then(res => dispatch({ type: GET_VIDEOGAME, payloand: res }))
//      }
// }

export function getNameVideogames(name) {
   return async function (dispatch) {
      try {
         const namesData = await axios.get("http://localhost:3001/videogames?name="  + name)
         return dispatch({
            type: GET_NAME_VIDEOGAMES,
            payload: namesData.data
         })
      } catch (error) {
         alert("no encontramos el nombre de su juego")
      }
   }
}

export function getVideogameDetail(id) {
   return async function (dispatch) {
      try {
         const response = await axios.get(`http://localhost:3001/videogame/${id}`)
         console.log(response.data)
         return dispatch({
            type: GET_VIDEOGAME_DETAIL,
            payload: response.data
         })
      } catch (error) {
         alert("no encontramos el detalle del juego")
      }
   }
}

export function getGenres() {
   return async function (dispatch) {
      const genres = await axios.get("http://localhost:3001/genres");
      return dispatch({
         type: GET_GENRES,
         payload: genres.data,
      })

   }
}


export function postVideogames(payloand) {
   return async function (dispatch) {
      const data = await axios.post("http://localhost:3001/videogame", payloand)
      // console.log(data)
      return {
         type: POST_VIDEOGAME,
         payload: data
      }
   }
}

export function resetFilters(payload) {
   return {
      type: RESET_FILTERS,
      payload,
   };
}

export function resetVideogameDetail(payload) {
   return {
      type: RESET_DETAILS,
      payload,
   };
}

export function filterCreated(payload) {
   return {
      type: FILTER_CREATED,
      payload,
   };
}
export function orderByName(payload) {
   return {
      type: ORDER_BY_NAME,
      payload,
   };
}
export function orderByRating(payload) {
   return {
      type: ORDER_BY_RATING,
      payload,
   };
}

export function getPlatforms() {
   return async function (dispatch) {
      const json = await axios.get("http://localhost:3001/platforms");
      return dispatch({
         type: GET_PLATFORMS,
         payload: json.data
      })
   }
}
// export function getFilterByPlatforms(id) {
//    return async function (dispatch) {
//       const json = await axios.get(`http://localhost:3001/platforms/${id}`);
//       return dispatch({ type: FILTER_BY_PLATFORM, payload: json.data });
//    };
// }

export function getFilterByGenres(payload) {
   return { type: FILTER_BY_GENRE, payload };
}