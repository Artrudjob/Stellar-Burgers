import { baseUrl, checkResponse } from '../../consts/consts';

const ORDER_NUMBER = 'ORDER_NUMBER';

const burgerOrderNumber = (id) => ({
    type: ORDER_NUMBER,
    data: id
})

const fetchOrderNumber = (ingredients, openModal, stateLoader, removeIngredients) => {
    return function (dispatch) {
        dispatch({
            type: ORDER_NUMBER,
            ingredients
        })
        stateLoader(true)
        fetch(`${baseUrl}orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'ingredients': ingredients.map(item => {
                    return item._id
                })
            })
        })
            .then(checkResponse)
            .then(result => {
                dispatch(burgerOrderNumber(result.order.number))
                openModal(true); //меняет состояние на true, чтобы открылась модалка
                dispatch(removeIngredients)
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
            .finally(() => {
                stateLoader(false)
            })
    }
}

export { ORDER_NUMBER, burgerOrderNumber, fetchOrderNumber }