import {baseUrl, checkResponse} from "../../consts/consts";

const GET_TOKEN = 'GET_TOKEN';

const getToken = (answer) => ({
    type: GET_TOKEN,
    payload: answer
})

const fetchGetToken = () => {
    return function (dispatch) {
        dispatch({
            type: GET_TOKEN
        })

        const refreshToken = localStorage.getItem('refreshToken');

        fetch(`${baseUrl}auth/token`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': `${refreshToken}`
            }
        })
            .then(checkResponse)
            .then(result => {
                dispatch(getToken(result))
                localStorage.setItem('accessToken', result);
                localStorage.setItem('ExpiredTime', new Date());
                return result;
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

function getValidToken() {
    const expiredTime = Date.parse(localStorage.getItem('ExpiredTime'));
    const currentTime = new Date();
    console.log((currentTime - expiredTime) / 60000 )
    if ((currentTime - expiredTime) / 60000 > 20) {
        fetchGetToken();
    } else {
        return localStorage.getItem('accessToken');
    }
}

export { GET_TOKEN, fetchGetToken, getValidToken };