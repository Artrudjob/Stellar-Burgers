export const SORT_INGREDIENT = 'SORT_INGREDIENT';

export const sortIngredient = (element, toIndex) => ({
    type: SORT_INGREDIENT,
    payload: {
        element: element,
        toIndex: toIndex
    }
})