import {
     FILTER_BY_GENRE,
     FILTER_BY_PLATFORM,
     RESET_DETAILS,
     RESET_FILTERS,
} from './actions.js';

let initialState = {
     videogames: [],
     allvideogames: [],
     platforms: [],
     videogameDetail: [],
     genres: [],
}

// EL REDUCER SIEMPRE TIENE QUE GENERAR UN NUEVO ESTADO,
// ESTE ES EL ESTADO GLOBAL!!! osea cuando se modifique algo

export default function reducer(state = initialState, action) {
     switch (action.type) {
          case "GET_VIDEOGAMES":
               return {
                    ...state,
                    videogames: action.payload,
                    allvideogames: action.payload,
               };
          case RESET_FILTERS:
               return {
                    ...state,
                    videogames: state.allvideogames,
               };
          case RESET_DETAILS:
               return {
                    ...state,
                    videogameDetail: [],
               };
          case "GET_GENRES":
               return {
                    ...state,
                    genres: action.payload,
               };
          case "GET_PLATFORMS":
               return {
                    ...state,
                    platforms: action.payload,
               };
          case "POST_VIDEOGAME": {
               return {
                    ...state,
               };
          }
          case FILTER_BY_PLATFORM:
               return {
                    ...state,
                    videogames: action.payload,
               };
          case FILTER_BY_GENRE:
               return {
                    ...state,
                    videogames: action.payload,
               };

          case "FILTER_CREATED":
               const createdFilter =
                    action.payload === "Created"
                         ? state.allvideogames.filter((v) => v.id.length > 10)
                         : state.allvideogames.filter((v) => v.id.toString().length < 6);

               return {
                    ...state,
                    videogames:
                         action.payload === "All" ? state.allvideogames : createdFilter,
               };

          case "GET_NAME_VIDEOGAMES":
               return {
                    ...state,
                    videogames: action.payload,
               };
          case "GET_VIDEOGAME_DETAIL":
               return {
                    ...state,
                    videogameDetail: action.payload,
               };
          case "ORDER_BY_NAME":
               let arraySort =
                    action.payload === "Asc"
                         ? state.videogames.sort(function (a, b) {
                              if (a.name > b.name) {
                                   return 1;
                              }
                              if (b.name > a.name) {
                                   return -1;
                              }
                              return 0;
                         })
                         : state.videogames.sort(function (a, b) {
                              if (a.name > b.name) {
                                   return -1;
                              }
                              if (b.name > a.name) {
                                   return 1;
                              }
                              return 0;
                         });
               return {
                    ...state,
                    videogames: arraySort,
               };
          case "ORDER_BY_RATING":
               let arraySort1 =
                    action.payload === "Less"
                         ? state.videogames.sort(function (a, b) {
                              if (a.rating > b.rating) {
                                   return 1;
                              }
                              if (b.rating > a.rating) {
                                   return -1;
                              }
                              return 0;
                         })
                         : state.videogames.sort(function (a, b) {
                              if (a.rating > b.rating) {
                                   return -1;
                              }
                              if (b.rating > a.rating) {
                                   return 1;
                              }
                              return 0;
                         });
               return {
                    ...state,
                    videogames: action.payload === "All" ? state.videogames : arraySort1,
               };
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