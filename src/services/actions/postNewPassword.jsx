import { baseUrl, checkResponse } from '../../consts/consts';

const POST_NEW_PASSWORD = 'POST_NEW_PASSWORD';

const postNewPassword = (successMessage) => ({
    type: POST_NEW_PASSWORD,
    payload: {
        message: successMessage
    }
})

const fetchNewPassword = (newPassword, token) => {
    return function (dispatch) {
        fetch(`${baseUrl}password-reset/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'password': `${newPassword}`,
                'token': `${token}`
            })
        })
            .then(checkResponse)
            .then((result) => {
                postNewPassword(result.message)
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export {POST_NEW_PASSWORD, fetchNewPassword}