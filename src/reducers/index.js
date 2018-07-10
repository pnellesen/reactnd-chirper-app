import { combineReducers } from 'redux'
import currentUser from './currentUser'
import authors from './authors'
import chirps from './chirps'

export default combineReducers({
    authors,
    chirps,
    currentUser
})