export const FETCH_DATA = 'FETCH_DATA'

export const fetchChirps = (chirps) => {
    return {
        type: FETCH_DATA,
        chirps

    }
}