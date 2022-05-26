import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import registerStyle from './register.module.css';
import {Button, Input, ShowIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {fetchRegisterUser} from '../../services/actions/resgisterUser';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(document.cookie);

    const [name, setName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');

    function handleChange(e, value) {
        value(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(fetchRegisterUser(userEmail, userPassword, name, navigate));
    }

    return (
        <section className={registerStyle.register}>
            <div className={registerStyle.register__container}>
                <form onSubmit={handleSubmit}>
                    <h2 className={`text text_type_main-medium ${registerStyle.register__title}`}>Регистрация</h2>
                    <fieldset className={registerStyle.register__fieldset}>
                        <div className={`mt-6 ${registerStyle.register__input}`}>
                            <Input value={name} type="text" placeholder="Имя" name="new-name" size="default"
                                   onChange={(e) => {handleChange(e, setName)}}/>
                        </div>
                        <div className={`mt-6 ${registerStyle.register__input}`}>
                            <Input value={userEmail} type="email" placeholder="E-mail" name="new-email" size="default"
                                   onChange={(e) => {handleChange(e, setUserEmail)}}/>
                        </div>
                        <div className={`mt-6 ${registerStyle.register__input}`}>
                            <Input value={userPassword} type="password" placeholder="Пароль" name="new-password" size="default"
                                   onChange={(e) => {handleChange(e, setUserPassword)}} />
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