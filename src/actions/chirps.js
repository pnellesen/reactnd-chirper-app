import { saveLikeToggle } from '../utils/api'
export const FETCH_DATA = 'FETCH_DATA'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'


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


export const handleToggleLikes = (toggleInfo) => {

    return (dispatch) => {
        dispatch(toggleLikeAction(toggleInfo))
        return saveLikeToggle(toggleInfo).then(() => {
            console.log("saveLikeToggle finished:")
        }).catch((e) => {
            console.warn('Error toggling chirp: ', e);
            alert('There was a problem liking this chirp. Please try again');
            dispatch(toggleLikeAction(toggleInfo))
        })

     }
}


