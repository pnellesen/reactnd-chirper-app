//import { saveLikeToggle } from '../utils/api'
export const FETCH_DATA = 'FETCH_DATA'


export const fetchChirps = (chirps) => {
    return {
        type: FETCH_DATA,
        chirps

    }
}

/*
export const handleToggleLikes = (toggleInfo) => {
    return (dispatch) => {
        dispatch(toggleLikeAction)
        return saveLikeToggle(toggleInfo)
     }
}
*/

