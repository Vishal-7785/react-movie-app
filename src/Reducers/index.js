import {combineReducers} from 'redux';
import {ADD_MOVIES,ADD_FAVOURITE,ADD_UNFAVOURITE,SET_SHOW_FAVOURITES} from '../actions'

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourires: false
};
const initialSearchState = {
    result: {}
};

export function search(state=initialSearchState,action){
        return state;
}

export function movies(state=initialMoviesState, action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //     ...state,
    //     list: action.movies
    // }
    // }
    switch(action.type){
        case ADD_MOVIES:
            return {
                    ...state,
                    list: action.movies
                 }
         case ADD_FAVOURITE: {
             return{
                 ...state,
                 favourites: [action.movie, ...state.favourites]
             }
         }     
         case ADD_UNFAVOURITE:{
             const filteredArray = state.favourites.filter(movie=>movie.Title!== action.movie.Title);
             return{
                    ...state,
                    favourites: filteredArray
             } 
         }    
          case SET_SHOW_FAVOURITES: {
              return {
                  ...state,
                  showFavourires : action.val
              }
          }
             default :
             return state; 
    }
    return state;
}
 const initialRootState = {
     movies: initialMoviesState,
     search: initialSearchState
 }
 export default combineReducers({
     movies,
     search
 });

//   export default function rootReducer(state = initialRootState,action){
//       return {
//           movies:movies(state.movies,action),
//           search: search(state.search,action)
//       }
//   }
