import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { socketMiddleware } from './middleware/socketMiddleware';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE
} from './actions/wsActionTypes';

export interface IWsActions {
    readonly wsStart: 'WS_CONNECTION_START';
    readonly onOpen: 'WS_CONNECTION_SUCCESS';
    readonly onClose: 'WS_CONNECTION_CLOSED';
    readonly onError: 'WS_CONNECTION_ERROR';
    readonly onMessage: 'WS_GET_MESSAGE';
    readonly wsSendMessage: 'WS_SEND_MESSAGE';
}

const wsActions = {
    wsStart: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE,
    wsSendMessage: WS_SEND_MESSAGE
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions)));
const store = createStore(rootReducer, enhancer);

export type AppDispatch = typeof store.dispatch;

export default store;