const WS_CONNECTION_START = 'WS_CONNECTION_START';
const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';

const wsConnectionStart = (payload) => {
    return {
        type: WS_CONNECTION_START,
        payload: payload
    }

}

const wsConnectionSuccess = () => {
    return {
        type: WS_CONNECTION_SUCCESS
    };
};

const wsConnectionClosed = () => {
    return {
        type: WS_CONNECTION_CLOSED
    };
};

const wsGetMessage = (message) => {
    return {
        type: WS_GET_MESSAGE,
        payload: message
    };
};

const wsSendMessage = (message) => {
    return {
        type: WS_SEND_MESSAGE,
        payload: message
    };
};

export {
    WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED, WS_GET_MESSAGE, WS_SEND_MESSAGE,
    wsConnectionStart, wsConnectionClosed
}