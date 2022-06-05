import {baseUrl, checkResponse} from "../../consts/consts";

const REGISTER_USER = 'REGISTER_USER';

const registerUser = (userEmail, userName) => ({
    type: REGISTER_USER,
    payload: {
        email: userEmail,
        name: userName
    }
})

const fetchRegisterUser = (email, password, name, navigate) => {
    return function (dispatch) {
        fetch(`${baseUrl}auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': `${email}`,
                'password': `${password}`,
                'name': `${name}`
            })
        })
            .then(checkResponse)
            .then((result) => {
                dispatch(registerUser(result.user.email, result.user.name));
                localStorage.setItem('refreshToken', result.refreshToken);
                document.cookie = `accessToken=${result.accessToken}`;
                localStorage.setItem('ExpiredTime', new Date());
                navigate('/');
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export {REGISTER_USER, fetchRegisterUser};