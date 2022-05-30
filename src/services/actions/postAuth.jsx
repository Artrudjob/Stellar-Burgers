import {baseUrl, checkResponse} from "../../consts/consts";

const POST_AUTH = 'POST_AUTH';

const postAuth = (userEmail, userName) => ({
    type: POST_AUTH,
    payload: {
        email: userEmail,
        name: userName
    }
});

const fetchPostAuth = (userEmail, userPassword, navigate) => {
    return function (dispatch) {
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
            dispatch(postAuth(result.user.email, result.user.name));
            localStorage.setItem('refreshToken', result.refreshToken);
            localStorage.setItem('accessToken', result.accessToken);
            localStorage.setItem('ExpiredTime', new Date());
            navigate('/');
        })
        .catch((err) => {
            console.log(`Что-то пошло не так: ${err}`);
        })
    }
}

export {POST_AUTH, fetchPostAuth};