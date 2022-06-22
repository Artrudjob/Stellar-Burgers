import {getCookie} from "../../consts/consts";

export const socketMiddleware = (wsActions) => {
    return store => {
        let socket = null;

        return next => action => {
            const { dispatch } = store;
            const { type, payload } = action;
            const { wsStart, onOpen, onClose, onError, onMessage, wsSendMessage } = wsActions;

            if (type === wsStart) {
                socket = new WebSocket(payload);
            }

            if (socket) {
                socket.onopen = event => {
                    dispatch({ type: onOpen, payload: event });
                };

                socket.onerror = event => {
                    dispatch({ type: onError, payload: event });
                };

                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const { success, ...restParsedData } = parsedData;

                    dispatch({ type: onMessage, payload: restParsedData });
                };

                socket.onclose = event => {
                    dispatch({ type: onClose, payload: event });
                };

                if (type === wsSendMessage) {
                    const message = getCookie('accessToken');
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    };
};
