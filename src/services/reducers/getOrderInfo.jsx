import { GET_ORDER, GET_ORDER_REQUEST, GET_ORDER_ERROR } from '../actions/getOrder';

const initialState = {
    data: [],
    loading: false,
    error: null
}

function orderReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ORDER:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case GET_ORDER_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default: {
            return state;
        };
    }
};

export default orderReducer;