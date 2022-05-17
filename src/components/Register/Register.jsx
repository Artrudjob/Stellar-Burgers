import React from 'react';
import { Link } from 'react-router-dom';
import registerStyle from './register.module.css';
import {Button, Input, ShowIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function Register() {
    const [value, setValue] = React.useState('')

    return (
        <section className={registerStyle.register}>
            <div className={registerStyle.register__container}>
                <form>
                    <h2 className={`text text_type_main-medium ${registerStyle.register__title}`}>Регистрация</h2>
                    <fieldset className={registerStyle.register__fieldset}>
                        <div className={`mt-6 ${registerStyle.register__input}`}>
                            <Input value={value} type="text" placeholder="Имя" name="new-name" size="default" onChange={() => {}}/>
                        </div>
                        <div className={`mt-6 ${registerStyle.register__input}`}>
                            <Input value={value} type="email" placeholder="E-mail" name="new-email" size="default" onChange={() => {}}/>
                        </div>
                        <div className={`mt-6 ${registerStyle.register__input}`}>
                            <Input value={value} type="password" placeholder="Пароль" name="new-password" size="default" onChange={() => {}} />
                            <div className={registerStyle.register__image}>
                                <ShowIcon type={"primary"} />
                            </div>
                        </div>
                        <Button type={"primary"} size={"medium"} className={`text text_type_main-small mt-6`}>Зарегистрироваться</Button>
                        <p className={`text text_type_main-default mt-20 ${registerStyle.register__text}`}>Уже зарегистрированы?
                            <Link to="/Login" className={`pl-2 ${registerStyle.register__link}`}>Войти</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default Register;