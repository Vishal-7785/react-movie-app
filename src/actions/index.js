
// {
//     type: ADD_MOVIES
//     movies:[m1,m2,m3]
// }


// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const ADD_UNFAVOURITE = 'ADD_UNFAVOURITE'

// action creators
 export function addMovies(movies){
     return{
        type: ADD_MOVIES,
        movies
     }
 }
 
 export function addFavourite(movie){
     return{
         type: ADD_FAVOURITE,
         movie
     }
 }
  
 export function addUnFavourite(movie){
    return{
        type: ADD_UNFAVOURITE,
        movie
    }
}