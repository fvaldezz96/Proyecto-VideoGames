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

export function getVideogame() {
   return async function (dispatch) { //closure
      const videogamesData = await axios.get(
         "http://localhost:3001/videogames", {})
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
   // console.log(name,'soy el name de la action')
   return async function (dispatch) {
      try {
         const namesData = await axios.get("http://localhost:3001/videogames?name=" + name)
         // console.log(namesData,'soy la data de la action')
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
         // console.log(response.data)
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
   /* `payload` es una variable que se utiliza para pasar datos al reductor. */
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
         /* Una constante que se utiliza para identificar la acción. */
            payload: json.data
            /* Los datos que se devuelven desde la API. */
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