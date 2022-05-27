import React from 'react';
import { NavLink } from 'react-router-dom';
import { EditIcon, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchSignOut } from '../../services/actions/signOutAccount';
import style from './profile.module.css';
import {useDispatch} from "react-redux";

function Profile() {
    const dispatch = useDispatch();

    const [name, setName] = React.useState('');
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    //Выйти с аккаунта
    function signOut() {
        const refreshToken = localStorage.getItem('refreshToken');
        dispatch(fetchSignOut(refreshToken))
    }

    return (
        <section className={style.profile}>
            <div className={style.profile__gridBox}>
                <nav className={style.profile__navigation}>
                    <NavLink to="" className={`text text_type_main-medium mt-5 ${style.profile__links}`} style={({isActive}) => ({color: isActive ? "white" : "darkgray"})}>Профиль</NavLink>
                    <NavLink to="orders" className={`text text_type_main-medium text_color_inactive mt-8 ${style.profile__links}`}>История заказов</NavLink>
                    <NavLink to="/" className={`text text_type_main-medium text_color_inactive mt-8 ${style.profile__links}`} onClick={signOut}>Выход</NavLink>
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