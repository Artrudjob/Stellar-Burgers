import { POST_USER_EMAIL } from '../actions/postUserEmail';

const initialState = {
    answer: {}
}

function restorePassword(state = initialState, action) {
    if (action.type === POST_USER_EMAIL) {
        return ({
            answer: action.payload
        })
    } else {
        return state;
    }
}

export default restorePassword;