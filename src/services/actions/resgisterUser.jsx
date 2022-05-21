import {baseUrl, checkResponse} from "../../consts/consts";

const REGISTER_USER = 'REGISTER_USER';

const registerUser = (answer) => ({
    type: REGISTER_USER,
    payload: answer
})

const fetchRegisterUser = (email, password, name) => {
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
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export {REGISTER_USER, fetchRegisterUser};