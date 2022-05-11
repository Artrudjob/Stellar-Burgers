//import ADD_TO_CONSTRUCTOR from '../actions/addToConstructor';

const initialState = {
    data: []
}

function burgerConstructor(state = initialState, action) {
    if (action.type === 'ADD_TO_CONSTRUCTOR') {
        if (action.payload.type === 'bun') {
            state.data = state.data.filter(item => item.type !== 'bun');
        }
        return {
            ...state,
            data: [...state.data, action.payload]
        }
    } else if (action.type === 'REMOVE_TO_CONSTRUCTOR') {
        return ({
            ...state,
            data: state.data.filter(element => element.uuid !== action.payload)
        })
    } else if (action.type === 'SORT_INGREDIENT') {
        const arrIngredients = [...state.data];
        const indexCurrentIngredients = arrIngredients.indexOf(action.payload.element)
        arrIngredients.splice(indexCurrentIngredients, 0, ...arrIngredients.splice(action.payload.toIndex, 1))
        return {
            ...state,
            data: arrIngredients,
        }
    } else {
        return state;
    }
}

export default burgerConstructor;