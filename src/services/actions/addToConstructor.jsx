import {v4 as uuid} from 'uuid'

export const ADD_TO_CONSTRUCTOR = 'ADD_TO_CONSTRUCTOR';

export const addToConstructor = (ingredient) => ({
    type: ADD_TO_CONSTRUCTOR,
    payload: {
        ...ingredient,
        uuid: uuid()
    }
})