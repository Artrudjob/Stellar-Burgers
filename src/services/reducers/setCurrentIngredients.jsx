import { ADD_CURRENT_INGREDIENT } from '../actions/addCurrentIngredient';
import { REMOVE_CURRENT_INGREDIENT } from '../actions/removeCurrentIngredient';

const initialState = {
    dataIngredient: null
}

function setCurrentIngredients(state = initialState, action) {
    if (action.type === ADD_CURRENT_INGREDIENT) {
        return {
            ...state,
            dataIngredient: action.dataIngredient
        }
    } else if (action.type === REMOVE_CURRENT_INGREDIENT) {
        return {
            ...state,
            dataIngredient: action.dataIngredient //вернуть null
        }
    } else {
        return state;
    }
}

export default setCurrentIngredients;