import {v4 as uuid} from 'uuid'

const ADD_TO_CONSTRUCTOR = (ingredient) => {
    return {
        type: 'ADD_TO_CONSTRUCTOR',
        payload: {
            ...ingredient,
            uuid: uuid()
        }
    }
}

export default ADD_TO_CONSTRUCTOR;