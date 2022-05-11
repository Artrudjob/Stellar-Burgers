const SORT_INGREDIENT = (element, toIndex) => {
    return {
        type: 'SORT_INGREDIENT',
        payload: {
            element: element,
            toIndex: toIndex
        }
    }
}

export default SORT_INGREDIENT;