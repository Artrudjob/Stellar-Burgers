import {POST_AUTH} from '../actions/postAuth';
import {REGISTER_USER} from '../actions/resgisterUser';
import {GET_USER_INFO} from '../actions/getUserInfo';
import {UPDATE_USER_INFO} from '../actions/updateUserInfo';
import {POST_USER_EMAIL} from '../actions/postUserEmail';
import {POST_NEW_PASSWORD} from '../actions/postNewPassword';
import {SIGN_OUT_ACCOUNT} from '../actions/signOutAccount';

const initialState = {
    isAuthorization: false,
    name: '',
    email: '',
    restorePassword: false,
    resetPassword: false,
    message: ''
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case POST_AUTH:
        case REGISTER_USER:
        case GET_USER_INFO:
        case UPDATE_USER_INFO: {
            return {
                isAuthorization: true,
                name: action.payload.name,
                email: action.payload.email
            };
        }
        case POST_USER_EMAIL:
            return {
                ...action,
                restorePassword: true,
                message: action.payload.message
            };
        case POST_NEW_PASSWORD:
            return {
                ...action,
                resetPassword: true,
                message: action.payload.message
            };
        case SIGN_OUT_ACCOUNT:
            return {
                ...initialState
            };
        default: {
            return state;
        };
    }
}

export default authReducer;