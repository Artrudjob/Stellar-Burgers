import {Button, Input, ShowIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Link} from 'react-router-dom';
import React from 'react';
import loginStyle from './login.module.css'

function Login() {
    const [value, setValue] = React.useState('')

    return (
        <section className={loginStyle.login}>
            <div className={loginStyle.login__container}>
                <form>
                    <h2 className={`text text_type_main-medium ${loginStyle.login__title}`}>Вход</h2>
                    <fieldset className={loginStyle.login__fieldset}>
                        <div className={`mt-6 ${loginStyle.login__input}`}>
                            <Input value={value} type="email" placeholder="E-mail" name="user-email" size="default" onChange={() => {}}/>
                        </div>
                        <div className={`mt-6 ${loginStyle.login__input}`}>
                            <Input value={value} type="password" placeholder="Пароль" name="user-password" size="default" onChange={() => {}} />
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
    )
}

export default Login;