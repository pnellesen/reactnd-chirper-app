import { FETCH_DATA, TOGGLE_LIKE, NEW_CHIRP , EDIT_CHIRP, DELETE_CHIRP} from '../actions/chirps'

export default function chirps (state={}, action) {
    const { chirpInfo } = action;
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                ...action.chirps
            }
        case TOGGLE_LIKE:
            const { id, hasLiked, authedUser } = action.toggleInfo
            const chirpToToggle = state[id]

            // We return a new state, containing all chirps in current state, except we replace the chirpToToggle with a new chirp object (key being the id), which contains all information in the old chirpToToggle, replacing the likes array with a new array.
            return {
                ...state,
                [id]: {
                    ...chirpToToggle,
                    likes: hasLiked ? chirpToToggle.likes.filter((authorId) => authorId !== authedUser) : chirpToToggle.likes.concat([authedUser])
                }
            }
        case NEW_CHIRP:
            const chirpToUpdate = chirpInfo.replyingTo !== null ? {[chirpInfo.replyingTo]: {...state[chirpInfo.replyingTo], replies: state[chirpInfo.replyingTo].replies.concat([chirpInfo.id])}} : {}
            return {
                ...state,
                [chirpInfo.id]: {...chirpInfo},
                ...chirpToUpdate
            }
        case EDIT_CHIRP:
            const { text } = chirpInfo;
            const chirpToEdit = state[chirpInfo.id]
            return {
                ...state,
                [chirpInfo.id]: {
                    ...chirpToEdit,
                    text: text
                }
            }
        case DELETE_CHIRP:
            // This idea from https://stackoverflow.com/questions/34401098/remove-a-property-in-an-object-immutably
            // will create a new variable called "newState" that we can return in the dispatch
            // value would be accessible as the contents of the chirp being deleted.

            const {[chirpInfo.id]: chirpToDelete, ...newState} = state;
            return {
                ...newState
            }
        default:
            return state
    }
}