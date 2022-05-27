import {baseUrl, checkResponse} from "../../consts/consts";

const REGISTER_USER = 'REGISTER_USER';

const registerUser = (answer) => ({
    type: REGISTER_USER,
    payload: answer
})

const fetchRegisterUser = (email, password, name, navigate) => {
    return function (dispatch) {
        dispatch ({
            type: REGISTER_USER
        })
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
                dispatch(registerUser(result));
                localStorage.setItem('refreshToken', result.refreshToken);
                navigate('/');
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export {REGISTER_USER, fetchRegisterUser};