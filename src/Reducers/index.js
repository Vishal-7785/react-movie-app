import {ADD_MOVIES,ADD_FAVOURITE,ADD_UNFAVOURITE,SET_SHOW_FAVOURITES} from '../actions'

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourires: false
}

export default function movies(state=initialMoviesState, action){
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