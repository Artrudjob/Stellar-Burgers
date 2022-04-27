import CURRENT_INGREDIENT from '../actions/currentIngredient';

const initialState = {
    dataIngredient: null
}

function setCurrentIngredients(state = initialState, action) {
    console.log(state.dataIngredient);
    if (action.type === 'CURRENT_INGREDIENT') {
        console.log(action.dataIngredient);
        return {
            ...state,
            dataIngredient: action.dataIngredient
        }
    }
    return state;
    //console.log(22222)
    /* switch (action.type) {
         case CURRENT_INGREDIENT:
             console.log(action.dataIngredient)
             return { ...state,
                 dataIngredient: action.dataIngredient
             }
         default:
             return state
     } */
}

export default setCurrentIngredients;