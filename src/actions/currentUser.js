export const GET_CURRENT_USER = 'GET_CURRENT_USER'

export const fetchCurrentUser = (userid) => {
    console.log("fetchCurrentUser - userid:" + userid)
    return {
        type: GET_CURRENT_USER,
        userid
    }
}