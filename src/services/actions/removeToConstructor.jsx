export const REMOVE_TO_CONSTRUCTOR = 'REMOVE_TO_CONSTRUCTOR';

export const removeToConstructor = (uuid) => ({
    type: REMOVE_TO_CONSTRUCTOR,
    payload: uuid
})