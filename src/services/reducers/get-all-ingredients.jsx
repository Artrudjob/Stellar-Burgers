import GET_ALL_INGREDIENTS from "../actions/get-all-ingredients";

const initialState = {
    ingredients: [],
    loading: false,
    error: null
}

function getAllIngredients(state = initialState, action) {
    if (action.type === 'GET_ALL_INGREDIENTS') {
        return {
            ...state,
            ingredients: action.payload,
            loading: true,
        }

    }
    return state;
}

export default getAllIngredients;