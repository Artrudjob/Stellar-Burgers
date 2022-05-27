import { SIGN_OUT_ACCOUNT } from '../actions/signOutAccount';

const initialState = {
    data: {}
}

function signOutReducer(state = initialState, action) {
    if (action.type === SIGN_OUT_ACCOUNT) {
        return ({
            data: action.payload
        })
    } else {
        return state;
    }
}

export default signOutReducer;