import {baseUrl, checkResponse} from "../../consts/consts";

const SIGN_OUT_ACCOUNT = 'SIGN_OUT_ACCOUNT';

const signOutAccount = (answer) => ({
    type: SIGN_OUT_ACCOUNT,
    payload: answer
})

const fetchSignOut = (refreshToken) => {
    return function (dispatch) {
        dispatch({
            type: SIGN_OUT_ACCOUNT
        })
        fetch(`${baseUrl}auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'token': refreshToken
            })
        })
            .then(checkResponse)
            .then(result => {
                dispatch(signOutAccount(result));
                localStorage.removeItem('refreshToken');
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export {SIGN_OUT_ACCOUNT, fetchSignOut};