import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const FETCH_DATA = 'FETCH_DATA'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const NEW_CHIRP = 'NEW_CHIRP'
export const EDIT_CHIRP = 'EDIT_CHIRP'


export const fetchChirps = (chirps) => {
    return {
        type: FETCH_DATA,
        chirps

    }
}

export const toggleLikeAction = (toggleInfo) => {

    return {
        type: TOGGLE_LIKE,
        toggleInfo
    }
}

export const newChirpAction = (chirpInfo) => {
    return {
        type: NEW_CHIRP,
        chirpInfo
    }
}

export const editChirpAction = (chirpInfo) => {
    return {
        type: EDIT_CHIRP,
        chirpInfo
    }
}


export const handleToggleLikes = (toggleInfo) => {
    return (dispatch) => {
        dispatch(toggleLikeAction(toggleInfo))
        return saveLikeToggle(toggleInfo).then(() => {
        }).catch((e) => {
            console.warn('Error toggling chirp: ', e);
            alert('There was a problem liking this chirp. Please try again');
            dispatch(toggleLikeAction(toggleInfo))
        })

     }
}

export const handleNewChirp = (newChirpInfo) => {
    return (dispatch) => {
        dispatch(showLoading())
        return saveTweet(newChirpInfo)
            .then((chirp) => dispatch(newChirpAction(chirp)))
            .then(() => dispatch(hideLoading()))
    }

}

export const handleEditChirp = (chirpInfo) => {
    console.log("handleEditChirp: ", chirpInfo)
    return (dispatch) => {
        dispatch(editChirpAction(chirpInfo))
    }
}

