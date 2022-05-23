import React from 'react';
import { NavLink } from 'react-router-dom';
import { EditIcon, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './profile.module.css';

function Profile() {
    const [name, setName] = React.useState('');
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <section className={style.profile}>
            <div className={style.profile__gridBox}>
                <nav className={style.profile__navigation}>
                    <NavLink to="" className={`text text_type_main-medium mt-5 ${style.profile__links}`} style={({isActive}) => ({color: isActive ? "white" : "darkgray"})}>Профиль</NavLink>
                    <NavLink to="orders" className={`text text_type_main-medium text_color_inactive mt-8 ${style.profile__links}`}>История заказов</NavLink>
                    <NavLink to="/" className={`text text_type_main-medium text_color_inactive mt-8 ${style.profile__links}`}>Выход</NavLink>
                    <p className={`text text_type_main-default text_color_inactive mt-25 ${style.profile_text}`}>В этом разделе вы можете
                        изменить свои персональные данные</p>
                </nav>
                <div className={style.profile__inputs}>
                    <div className={style.profile__box}>
                        <Input value={name} type="text" placeholder="Имя" onChange={() => {}} />
                        <div className={style.profile__image}>
                            <EditIcon type="primary" />
                        </div>
                    </div>
                    <div className={style.profile__box}>
                        <Input value={login} type="email" placeholder="Логин" onChange={() => {}} />
                        <div className={style.profile__image}>
                            <EditIcon type="primary" />
                        </div>
                    </div>
                    <div className={style.profile__box}>
                        <Input value={password} type="password" placeholder="Пароль" onChange={() => {}} />
                        <div className={style.profile__image}>
                            <EditIcon type="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;