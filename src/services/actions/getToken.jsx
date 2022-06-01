import {baseUrl, checkResponse} from "../../consts/consts";

const GET_TOKEN = 'GET_TOKEN';

const getToken = (answer) => ({
    type: GET_TOKEN,
    payload: answer
})

const fetchGetToken = () => { //обновление токена
    return function (dispatch) {
        const refreshToken = localStorage.getItem('refreshToken');

        fetch(`${baseUrl}auth/token`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'token': `${refreshToken}`
            })
        })
            .then(checkResponse)
            .then(result => {
                dispatch(getToken(result))
                localStorage.setItem('accessToken', result.accessToken);
                localStorage.setItem('ExpiredTime', new Date());
                return result;
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }
}

export { GET_TOKEN, fetchGetToken };