import {
     FILTER_BY_GENRE,
     FILTER_BY_PLATFORM,
     RESET_DETAILS,
     RESET_FILTERS,
     GET_NAME_VIDEOGAMES,
     GET_VIDEOGAMES,
     GET_VIDEOGAME_DETAIL,
     GET_PLATFORMS,
     GET_GENRES,
     FILTER_CREATED,
     ORDER_BY_NAME,
     ORDER_BY_RATING,
     POST_VIDEOGAME
} from './actions.js';

let initialState = {
     videogames: [],
     allvideogames: [],
     platforms: [],
     videogameDetail: [],
     genres: [],
}

export default function rootReducer(state = initialState, action) {
     switch (action.type) {
          case GET_VIDEOGAMES:
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
          case GET_GENRES:
               return {
                    ...state,
                    genres: action.payload,
               };
          case GET_PLATFORMS:
               return {
                    ...state,
                    platforms: action.payload,
               };
          case POST_VIDEOGAME: {
               return {
                    ...state,
               };
          }
          case FILTER_BY_PLATFORM:
               const filter = action.payload === "All"
                    ? state.allvideogames
                    : state.allvideogames.filter((e) => {
                         return e.platforms.find((e) => {
                              return e.anme === action.payload
                         })
                    })
               return {
                    ...state,
                    videogames: filter,
               };
          case FILTER_BY_GENRE:
               const filtrado = action.payload === "All"
                    ? state.allvideogames
                    : state.allvideogames.filter((g) => {
                         return g.genres.find((g) => {
                              return g.name === action.payload;
                         });
                    });
               return {
                    ...state,
                    videogames: filtrado,
               };

          case FILTER_CREATED:
               const createdFilter =
                    action.payload === "Created"
                         ? state.allvideogames.filter((v) => v.id.length > 10)
                         : state.allvideogames.filter((v) => v.id.toString().length < 6);

               return {
                    ...state,
                    videogames:
                         action.payload === "All" ? state.allvideogames : createdFilter,
               };

          case GET_NAME_VIDEOGAMES:
               return {
                    ...state,
                    videogames: action.payload,
               };
          case GET_VIDEOGAME_DETAIL:
               return {
                    ...state,
                    videogameDetail: action.payload,
               };
          case ORDER_BY_NAME:
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
          case ORDER_BY_RATING:
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


