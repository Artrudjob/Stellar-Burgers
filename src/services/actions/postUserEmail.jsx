import { baseUrl, checkResponse } from '../../consts/consts';

const POST_USER_EMAIL = 'POST_USER_EMAIL';

const postUserEmail = (answer) => ({
    type: POST_USER_EMAIL,
    payload: answer
})

const fetchUserEmail = (userEmail, navigateResetPassword) => {
    return function (dispatch) {
        dispatch ({
            type: POST_USER_EMAIL
        })
        fetch(`${baseUrl}password-reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': `${userEmail}`
            })
        })
            .then(checkResponse)
            .then((result) => {
                console.log(result);
                dispatch(postUserEmail(result));
                navigateResetPassword('/reset-password', {replace: true});
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export { POST_USER_EMAIL, postUserEmail, fetchUserEmail };