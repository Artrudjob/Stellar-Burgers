import {baseUrl, checkResponse} from "../../consts/consts";
import { updateUserInfo } from '../../consts/consts';

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

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
            })
    }
}

export {UPDATE_USER_INFO, updateInfo};