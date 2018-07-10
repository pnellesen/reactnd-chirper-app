export const FETCH_DATA = 'FETCH_DATA'

export function fetchAuthors(authors) {
    return {
        type: FETCH_DATA,
        authors

    }
}