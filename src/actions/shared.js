//NOTE: in our todos app, we did this differently. The todos and goals each imported what was in shared.js. Here, we're going to import the fetchData implementation from each data type into this code instead.

import { getInitialData } from '../utils/api'
import { fetchAuthors } from '../actions/authors'
import { fetchChirps } from '../actions/chirps'
import { fetchCurrentUser } from '../actions/currentUser'

// we're mocking an authenticated user using one of the users in ./utils/api.js. I'm calling this the "currentUser" in this app.

const CURRENT_USER_ID = 'tylermcginnis'


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, tweets}) => {
            // Note: users will map to our "authors", tweets will map to our "chirps"
            dispatch(fetchAuthors(users));
            dispatch(fetchChirps(tweets));
            dispatch(fetchCurrentUser(CURRENT_USER_ID));
        })
    }
}