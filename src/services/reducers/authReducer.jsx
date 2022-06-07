import {POST_AUTH} from '../actions/postAuth';
import {REGISTER_USER} from '../actions/resgisterUser';
import {GET_USER_INFO} from '../actions/getUserInfo';
import {UPDATE_USER_INFO} from '../actions/updateUserInfo';
import {POST_USER_EMAIL} from '../actions/postUserEmail';
import {POST_NEW_PASSWORD} from '../actions/postNewPassword';
import {SIGN_OUT_ACCOUNT} from '../actions/signOutAccount';

import {POST_AUTH_FAILURE} from '../actions/postAuth';
import {RESISTER_USER_FAILURE} from '../actions/resgisterUser';
import {GET_USER_INFO_FAILURE} from '../actions/getUserInfo';
import {UPDATE_USER_FAILURE} from '../actions/updateUserInfo';
import {POST_USER_EMAIL_FAILURE} from '../actions/postUserEmail';
import {POST_NEW_PASSWORD_FAILURE} from '../actions/postNewPassword';

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
                status: 'success',
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
        case POST_AUTH_FAILURE:
        case RESISTER_USER_FAILURE:
        case GET_USER_INFO_FAILURE:
        case UPDATE_USER_FAILURE:
        case POST_USER_EMAIL_FAILURE:
        case POST_NEW_PASSWORD_FAILURE:
            return {
                ...initialState
            };
        default: {
            return state;
        };
    }
}

export default authReducer;