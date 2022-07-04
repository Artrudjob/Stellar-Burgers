import { Button, Input, ShowIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {Link, useNavigate} from 'react-router-dom';
import React, {ChangeEvent, FormEvent} from 'react';
import { fetchPostAuth } from '../../services/actions/postAuth';
import loginStyle from './login.module.css'
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../services/rootReducer';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector((store: RootState) => store.authReducer);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChange(e: ChangeEvent<HTMLInputElement>, value: (e: string) => void): void {
        value(e.target.value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(fetchPostAuth(email, password, navigate));
    }

    if (userData.isAuthorization) {
        navigate(-1);
    }

    return (
        <>
            <section className={loginStyle.login}>
                <div className={loginStyle.login__container}>
                    <form onSubmit={handleSubmit}>
                        <h2 className={`text text_type_main-medium ${loginStyle.login__title}`}>Вход</h2>
                        <fieldset className={loginStyle.login__fieldset}>
                            <div className={`mt-6 ${loginStyle.login__input}`}>
                                <Input value={email} type="email" placeholder="E-mail" name="user-email"
                                       size="default" onChange={(e) => {handleChange(e, setEmail)}}/>
                            </div>
                            <div className={`mt-6 ${loginStyle.login__input}`}>
                                <Input value={password} type="password" placeholder="Пароль" name="user-password"
                                       size="default" onChange={(e) => {handleChange(e, setPassword)}} />
                                <div className={loginStyle.login__image}>
                                    <ShowIcon type={"primary"} />
                                </div>
                            </div>
                            <Button type={"primary"} size={"medium"} className={`text text_type_main-small mt-6`}>Войти</Button>
                            <p className={`text text_type_main-default mt-20 ${loginStyle.login__text}`}>Вы - новый пользователь?
                                <Link to="/Register" className={`pl-2 ${loginStyle.login__link}`}>Зарегистрироваться</Link>
                            </p>
                            <p className={`text text_type_main-default mt-4 ${loginStyle.login__text}`}>Забыли пароль?
                                <Link to="/Forgot-password" className={`pl-2 ${loginStyle.login__link}`}>Восстановить пароль</Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;