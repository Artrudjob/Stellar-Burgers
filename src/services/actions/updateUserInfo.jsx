import { updateUserInfo } from '../../consts/consts';

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

const updateUserData = (userEmail, userName) => ({
    type: UPDATE_USER_INFO,
    payload: {
        email: userEmail,
        name: userName
    }
});

const updateInfo = (userEmail, userName) => {
    return function (dispatch) {
        updateUserInfo(userEmail, userName)
            .then((res) => {
                dispatch(updateUserData(userEmail, userName))
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
                dispatch({
                    type: UPDATE_USER_FAILURE,
                    status: err
                })
            })
    }
}

export {UPDATE_USER_INFO, UPDATE_USER_FAILURE, updateInfo};