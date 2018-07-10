import { GET_CURRENT_USER } from '../actions/currentUser'

export default function currentUser (state=null, action) {
    switch (action.type) {
        case GET_CURRENT_USER:
           return action.userid;
       default:
           return state
     }
}