import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
} from '../actions/wsActionTypes';

const initialState = {
    wsConnected: false,
    messages: [],
    error: undefined
};

function wsReducer(state = initialState, action) {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state, wsConnected: true, error: undefined
            };
        case WS_CONNECTION_ERROR:
            return {
                ...state, wsConnected: false, error: action.payload
            };
        case WS_CONNECTION_CLOSED:
            return {
                wsConnected: false, error: undefined, messages: []
            };
        case WS_GET_MESSAGE:
            return {
                ...state, messages: [...state.messages, action.payload], error: undefined
            };
        default:
            return state;
    }
}

export default wsReducer;