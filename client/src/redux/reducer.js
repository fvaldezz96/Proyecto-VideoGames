import { GET_VIDEOGAME, GET_VIDEOGAME_DATAIL, CREATE_VIDEOGAME, DELETE_VIDEOGAME, ORDER_NAME, GET_GENRE, GET_PLATFORM, ORDER_RATING, GET_GAME_NAME, FILTER_CREATED, FILTER_GENRE } from './actions.js';

let initialState = {
     games: [],
     videogame: [],
     detail: [],
     platforms: [],
     genres: [],
}

// EL REDUCER SIEMPRE TIENE QUE GENERAR UN NUEVO ESTADO,
// ESTE ES EL ESTADO GLOBAL!!! osea cuando se modifique algo

export default function reducer(state = initialState, { payload, type }) {
     switch (type) {
          case GET_VIDEOGAME:
               return {
                    ...state,
                    games: payload,
                    videogame: payload
               }
          case FILTER_GENRE:
               const filtrado = state.games;
               const genreFiltrado = payload === "ga" ? filtrado :
                    filtrado.filter((e) => {
                         e.genres.includes(payload)//includes devuelve el valor que se le pasa       
                         //por parametro , osea lo busca en el array y se lo trae                                                           
                    })
               return {
                    ...state,
                    videogame: genreFiltrado
               }
          case FILTER_CREATED: // esta parte la chequeo despues cuando esten  en el fron haciendo el filter!!
               const gameCreate = state.games;
               const filtroGameCreate = [];
               switch (payload) {
                    case 'api':
                         filtroGameCreate = gameCreate.filter(e => typeof (e.id) === Number)
                         break;
                    case 'creadoDb':
                         filtroGameCreate = gameCreate.filter(e => isNaN(e.id))
                    default:
                         break;
               }
               return {
                    ...state,
                    videogame: filtroGameCreate
               }
          case GET_GENRE:
               return {
                    ...state,
                    genres: payload
               }
          case GET_PLATFORM:
               return {
                    ...state,
                    platforms: payload
               }
          case GET_GAME_NAME:
               return {
                    ...state,
                    videogame: payload
               }
          case GET_VIDEOGAME_DATAIL:
               return {
                    ...state,
                    detail: payload
               }
          case CREATE_VIDEOGAME:
               return {
                    ...state,
               }

          case ORDER_NAME:
               const orden = state.games
               const ordenAlf = payload === "asc" ? orden.sort((a, b) => {
                    if (a.name > b.name) {
                         return 1
                    } else if (b.name > a.name) {
                         return - 1
                    } else {
                         return 0
                    }
               }) : orden.sort((a, b) => {
                    if (a.name > b.name) {
                         return -1
                    } else if (b.name > a.name) {
                         return 1
                    } else {
                         return 0
                    }
               })
               return {
                    ...state,
                    games: ordenAlf
               }
          case ORDER_RATING:
               const ordenR = state.games
               const ordenAlfR = payload === "ascR" ? ordenR.sort((a, b) => {
                    if (a.name > b.name) {
                         return 1
                    } else if (b.name > a.name) {
                         return - 1
                    } else {
                         return 0
                    }
               }) : ordenR.sort((a, b) => {
                    if (a.name > b.name) {
                         return -1
                    } else if (b.name > a.name) {
                         return 1
                    } else {
                         return 0
                    }
               })
               return {
                    ...state,
                    games: ordenAlfR
               }
          default:
               return state;
     }
}


// export default function (state = initialState,  {
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