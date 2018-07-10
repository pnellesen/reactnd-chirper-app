export const FETCH_DATA = 'FETCH_DATA'

const fetchAuthors = (authors) => {
    return {
        type: FETCH_DATA,
        authors

    }
}