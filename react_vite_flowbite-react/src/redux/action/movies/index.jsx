import { ActionType } from "../actions-types"

export const fetchMovies = (movies) =>{
    return{
        type: ActionType.FETCH_MOVIES ,
        payload : movies 
    }

}
export const selectedMovie = (movie) =>{
    return{
        type: ActionType.SELECT_MOVIE ,
        payload : movie 
    }   
}