import {POST_AUTH} from '../actions/postAuth';

const initialState = {
    data: {}
}

function authReducer(state = initialState, action) {
    if (action.type === POST_AUTH) {
        console.log(action)
        return ({
            data: action.payload
        })
    } else {
        return state;
    }
}

export default authReducer;