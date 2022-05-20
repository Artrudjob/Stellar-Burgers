import { POST_NEW_PASSWORD } from '../actions/postNewPassword';

const initialState = {
    answer: {}
}

function resetPassword(state = initialState, action) {
    if (action.type === POST_NEW_PASSWORD) {
        return ({
            answer: action.payload
        })
    } else {
        return state;
    }
}

export default resetPassword;