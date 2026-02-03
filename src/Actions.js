import {CHANGE_SEARCH_FIELD} from './Constantes.js'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
})