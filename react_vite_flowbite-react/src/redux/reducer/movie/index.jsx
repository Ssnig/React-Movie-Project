import { ActionType } from "../../action/actions-types"

const initialState ={
    movies : [],
    movie : {}
}
export const movieReducer = (state = initialState , {type, payload}) =>{
    switch(type){
        case ActionType.FETCH_MOVIES : 
        return {...initialState, movies : payload};

        case ActionType.SELECT_MOVIE :
        return {...initialState, movies : payload};
        default : return state ;
    }

}