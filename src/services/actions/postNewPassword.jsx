import { baseUrl, checkResponse } from '../../consts/consts';

const POST_NEW_PASSWORD = 'POST_NEW_PASSWORD';

const postNewPassword = (answer) => ({
    type: POST_NEW_PASSWORD,
    payload: answer
})

const fetchNewPassword = (newPassword, token) => {
    return function (dispatch) {
        dispatch ({
            type: POST_NEW_PASSWORD
        })
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
                console.log(result)
                postNewPassword(result)
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export {POST_NEW_PASSWORD, fetchNewPassword}