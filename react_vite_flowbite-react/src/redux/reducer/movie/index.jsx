import { ActionType } from "../../action/actions-types"

const initialState ={
    movies : [
        {name:'code lab',
            description : 'lorem oohfiahdifhiearh8hihasahdihuahfoghaeyfihiahdifhaihds8fhiahifhsaodhfah8sdhfiahsdihfihadsifhf9guodfkfhsdhgkskfhj99uoeuojojaosdjfjsj9fggjflsjlfoje9ufjljsjfkf9ruiujflksjdljsldjlfjlgghhhnkndkfor9eujsldjfljfdj'
        }
    ],
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