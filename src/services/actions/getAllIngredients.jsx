import { baseUrl, checkResponse } from '../../consts/consts';

const GET_ALL_INGREDIENTS = 'GET_ALL_INGREDIENTS';

const getAllIngredients = (ingredients) => ({
    type: GET_ALL_INGREDIENTS,
    payload: ingredients
})

const fetchIngredients = (/*ingredients*/) => {
    return function (dispatch) {
        /*dispatch({
            type: GET_ALL_INGREDIENTS,
            payload: ingredients
        }) */
        fetch(`${baseUrl}ingredients`)
            .then(checkResponse)
            .then((result) => {
                dispatch(getAllIngredients(result.data))
                return result.data
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export { GET_ALL_INGREDIENTS, getAllIngredients, fetchIngredients }
