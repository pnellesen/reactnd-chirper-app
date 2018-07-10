import { FETCH_DATA } from '../actions/chirps'

export default function chirps (state={}, action) {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                ...action.chirps
            }
        default:
            return state
    }
}