import {baseUrl, checkResponse} from "../../consts/consts";
import {getValidToken} from './getToken';

const GET_USER_INFO = 'GET_USER_INFO';

const getUserInfo = (userEmail, userName) => ({
    type: GET_USER_INFO,
    payload: {
        email: userEmail,
        name: userName
    }
});

const fetchGetUserInfo = () => {
    return function (dispatch) {

        const accessToken = localStorage.getItem('accessToken');

        fetch(`${baseUrl}auth/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${accessToken}`
            }
        })
            .then(checkResponse)
            .then(result => {
                dispatch(getUserInfo(result.user.email, result.user.name));
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export {GET_USER_INFO, fetchGetUserInfo};