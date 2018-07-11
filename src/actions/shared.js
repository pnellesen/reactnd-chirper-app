//NOTE: in our todos app, we did this differently. The todos and goals each imported what was in shared.js. Here, we're going to import the fetchData implementation from each data type into this code instead.

import { getInitialData } from '../utils/api'
import { fetchAuthors } from '../actions/authors'
import { fetchChirps } from '../actions/chirps'
import { fetchCurrentUser } from '../actions/currentUser'
import { showLoading, hideLoading } from 'react-redux-loading'

// we're mocking an authenticated user using one of the users in ./utils/api.js. I'm calling this the "currentUser" in this app.

const CURRENT_USER_ID = 'tylermcginnis'

// NOTE: this dispatch function will always return the new state resulting from the action
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({users, tweets}) => {
            // Note: users will map to our "authors", tweets will map to our "chirps"
            dispatch(fetchCurrentUser(CURRENT_USER_ID));

            const currentUserInfo = dispatch(fetchAuthors(users))['authors'][CURRENT_USER_ID];

            const allChirps = dispatch(fetchChirps(tweets))['chirps'];

            const currentUserChirps = currentUserInfo.tweets.map((tweet) => allChirps[tweet]);

            dispatch(hideLoading());
        })
    }
}