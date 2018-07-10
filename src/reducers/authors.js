import { FETCH_DATA } from '../actions/authors'

export default function authors (state={}, action) {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                ...action.authors
            }
        default:
            return state
    }
}