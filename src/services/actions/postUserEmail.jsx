import { baseUrl, checkResponse } from '../../consts/consts';

const POST_USER_EMAIL = 'POST_USER_EMAIL';
const POST_USER_EMAIL_FAILURE = 'POST_USER_EMAIL_FAILURE';

const postUserEmail = (successMessage) => ({
    type: POST_USER_EMAIL,
    payload: {
        message: successMessage
    }
})

const fetchUserEmail = (userEmail, navigateResetPassword) => {
    return function (dispatch) {
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
                dispatch(postUserEmail(result.message));
                navigateResetPassword('/reset-password', {replace: true, state: 'forgot-password'});
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`)
                dispatch({
                    type: POST_USER_EMAIL_FAILURE,
                    status: err
                })
            })
    }
}

export { POST_USER_EMAIL, POST_USER_EMAIL_FAILURE, postUserEmail, fetchUserEmail };