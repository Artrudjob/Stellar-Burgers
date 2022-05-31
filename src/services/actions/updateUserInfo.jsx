import {baseUrl, checkResponse} from "../../consts/consts";

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

const updateUserInfo = (userEmail, userName) => ({
    type: UPDATE_USER_INFO,
    payload: {
        email: userEmail,
        name: userName
    }
});

const fetchUpdateUserInfo = (userEmail, userName) => {
    return function(dispatch) {
        const accessToken = localStorage.getItem('accessToken')

        fetch(`${baseUrl}auth/user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${accessToken}`
            },
            body: JSON.stringify({
                'email': `${userEmail}`,
                'name': `${userName}`
            })
        })
            .then(checkResponse)
            .then(result => {
                dispatch(updateUserInfo(result.user.email, result.user.name))
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export {UPDATE_USER_INFO, fetchUpdateUserInfo};