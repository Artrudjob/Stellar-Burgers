import {baseUrl, checkResponse} from "../../consts/consts";

const POST_AUTH = 'POST_AUTH';

const postAuth = (answer) => ({
    type: POST_AUTH,
    payload: answer
});

const fetchPostAuth = (userEmail, userPassword, navigate) => {
    return function (dispatch) {
        dispatch({
            type: POST_AUTH
        })
    fetch(`${baseUrl}auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': `${userEmail}`,
            'password': `${userPassword}`
        })
    })
        .then(checkResponse)
        .then(result => {
            dispatch(postAuth(result));
            localStorage.setItem('refreshToken', result.refreshToken);
            navigate('/');
        })
        .catch((err) => {
            console.log(`Что-то пошло не так: ${err}`);
        })
    }
}

export {POST_AUTH, fetchPostAuth};