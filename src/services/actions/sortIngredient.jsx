const SORT_INGREDIENT = (fromIndex, toIndex) => {
    return {
        type: 'SORT_INGREDIENT',
        payload: {
            fromIndex: fromIndex,
            toIndex: toIndex
        }
    }
}