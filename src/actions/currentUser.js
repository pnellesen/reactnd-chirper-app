export const GET_CURRENT_USER = 'GET_CURRENT_USER'

const fetchCurrentUser = (userid) => {
    return {
        type: GET_CURRENT_USER,
        userid
    }
}