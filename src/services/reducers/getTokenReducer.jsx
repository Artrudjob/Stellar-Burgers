import { GET_TOKEN } from '../actions/getToken';

const initialState = {
    data: {}
}

function getTokenReducer(state = initialState, action) {
    if (action.type === GET_TOKEN) {
        return ({
            data: action.payload
        })
    } else {
        return state;
    }
}

export default getTokenReducer;