import {CHANGE_SEARCH_FIELD} from './Constantes.js'

const initialState = {
    searchField:'',
}

export const searchHeroes = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}