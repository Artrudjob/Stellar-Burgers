import {baseUrl, checkResponse} from "../../consts/consts";

const GET_ORDER = 'GET_ORDER';
const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

const getOrder = (order) => ({
    type: GET_ORDER,
    payload: order
});

const getOrderInfo = (number, loading) => {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_REQUEST
        });
        loading(true);
        fetch(`${baseUrl}orders/${number}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(checkResponse)
            .then(result => {
                dispatch(getOrder(result));
                loading(false);
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
                dispatch({
                    type: GET_ORDER_ERROR,
                    error: err
                });
                alert(`Ошибка - ${err}, перезагрузите страницу.`)
            })
    }
};

export { GET_ORDER, GET_ORDER_REQUEST, GET_ORDER_ERROR, getOrderInfo };