import { ORDER_NUMBER } from '../actions/orderNumber';

const initialState = {
    data: null
}

function getOrderNumber(state = initialState, action) {
    if (action.type === ORDER_NUMBER) {
        return {
            data: action.data
        }
    } else {
        return state
    }
}

export default getOrderNumber;