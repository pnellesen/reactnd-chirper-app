//NOTE: in our todos app, we did this differently. The todos and goals each imported what was in shared.js. Here, we're going to import the fetchData implementation from each data type into this code instead.

import { getInitialData } from '../utils/api'
import { fetchAuthors } from '../actions/authors'
import { fetchChirps } from '../actions/chirps'
import { fetchCurrentUser } from '../actions/currentUser'

// we're mocking an authenticated user using one of the users in ./utils/api.js. I'm calling this the "currentUser" in this app.

const CURRENT_USER_ID = 'tylermcginnis'

// NOTE: this dispatch function will always return the new state resulting from the action
export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, tweets}) => {
            // Note: users will map to our "authors", tweets will map to our "chirps"
            dispatch(fetchCurrentUser(CURRENT_USER_ID));
           
            const currentUserInfo = dispatch(fetchAuthors(users))['authors'][CURRENT_USER_ID];
            
            
            const allChirps = dispatch(fetchChirps(tweets))['chirps'];
            console.log("all chirps? ", allChirps);
            
            
            // Not sure we need to display all chirps by the current user.
            const currentUserChirps = currentUserInfo.tweets.map((tweet) => allChirps[tweet]);
            console.log("chirps for currentUser? ", currentUserChirps);
            
            /* This probably not needed - can get like information for a chirp from the chirp itself. Good practice though ;)
            
            const chirpKeys = Object.keys(allChirps);
            console.log("chirp keys: ", chirpKeys);
            currentUserInfo.likes = chirpKeys.filter((chirpKey) => (
                allChirps[chirpKey].likes.indexOf(CURRENT_USER_ID) >= 0
            ))
            
            console.log("current user info after adding likes? ", currentUserInfo);
            */

        })
    }
}