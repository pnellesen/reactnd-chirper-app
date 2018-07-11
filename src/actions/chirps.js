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
    console.log("handleToggleLikes: ", toggleInfo)
    return (dispatch) => {
        
        saveLikeToggle(toggleInfo).then(() => {
            dispatch(toggleLikeAction(toggleInfo))
        }).catch((e) => {
            console.warn('Error toggling chirp: ', e);
            alert('There was a problem liking this chirp. Please try again');
        })

     }
}


