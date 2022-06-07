import { getUserInfo } from '../../consts/consts';

const GET_USER_INFO = 'GET_USER_INFO';

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
            })
    }
}

export {GET_USER_INFO, getUser};