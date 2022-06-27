import { GET_VIDEOGAME, GET_VIDEOGAME_DATAIL, CREATE_VIDEOGAME, DELETE_VIDEOGAME, ORDER_NAME, GET_GENRE, GET_PLATFORM, ORDER_RATING, GET_GAME_NAME, FILTER_CREATED, FILTER_GENRE } from './actions.js';

let initialState = {
     games: [],
     videogame: [],
     detail: [],
     platform: [],
     genre: [],
     //  allvideogame = []
}

// EL REDUCER SIEMPRE TIENE QUE GENERAR UN NUEVO ESTADO,
// ESTE ES EL ESTADO GLOBAL!!! osea cuando se modifique algo

export default function (state = initialState, { payload, type }) {
     switch (type) {
          case GET_VIDEOGAME:
               return {
                    ...state,
                    games: payload,
                    videogame: payload
               }
          case FILTER_GENRE:
               const game = state.games

               const genreFiltered = payload === "ga" ? game :

                    game.filter((e) =>
                         e.genres.includes(payload))
               return {
                    ...state,
                    videogame: genreFiltered
               }
          case GET_PLATFORM:

          case GET_GENRE:
               return {
                    ...state,
                    genres: payload
               }
          default:
               break;
     }
}

//NECESITO DOCUMENTAR ESTO CUANDO TENGA EL CODIGO ARMADO
// export default function (state = initialState, action) {
//      switch (action.type) {
//           case GET_VIDEOGAME:
//         return {
//              ...state ,
//                  getVideogame: action.payload ; =>esto es un arreglo de objetos
//  }
//           case CREATE_VIDEOGAME:
//                return {
//                     ...state,
//                     detailVideogame: [...state.createVideogame, action.payload]
//                     // createVideogame : state.createVideogame.concat(action.payload)
//                }
//           case REMOVE_VIDEOGAME:
//           default:
//                return { ...state ,
//           createVideogame: state.createVideogame.filter((e)=>{
//           return e.id !== action.payload;
// })
//  }
//      }
// }