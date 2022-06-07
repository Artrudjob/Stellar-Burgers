import { getUserInfo } from '../../consts/consts';

const GET_USER_INFO = 'GET_USER_INFO';
const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILED';

const userData = (userEmail, userName) => ({
    type: GET_USER_INFO,
    payload: {
        email: userEmail,
        name: userName
    }
});

const getUser = () => {
    return function (dispatch) {
        getUserInfo()
            .then((res) => {
                dispatch(userData(res.user.email, res.user.name));
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
                dispatch({
                    type: GET_USER_INFO_FAILURE,
                    status: err
                });
            })
    }
}

export {GET_USER_INFO, GET_USER_INFO_FAILURE, getUser};