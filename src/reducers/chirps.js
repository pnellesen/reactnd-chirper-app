import { FETCH_DATA, TOGGLE_LIKE } from '../actions/chirps'

export default function chirps (state={}, action) {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                ...action.chirps
            }
        case TOGGLE_LIKE:
            console.log('TOGGLE_LIKE - action:', action);
            return {

            }
        default:
            return state
    }
}