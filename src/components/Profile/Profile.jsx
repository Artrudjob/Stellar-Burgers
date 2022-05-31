import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, EditIcon, Input, CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchSignOut } from '../../services/actions/signOutAccount';
import { fetchUpdateUserInfo} from '../../services/actions/updateUserInfo';
import style from './profile.module.css';
import {useDispatch, useSelector} from "react-redux";

function Profile() {
    const userData = useSelector(store => store.authReducer);

    const dispatch = useDispatch();

    const [name, setName] = React.useState(userData.name);
    const [login, setLogin] = React.useState(userData.email);
    const [password, setPassword] = React.useState('');

    const [isDisabled, setIsDisabled] = React.useState(true);

    function toggleBlockInput() {
        if (isDisabled) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }

    function updateUserInfo() {
        dispatch(fetchUpdateUserInfo(login, name));
        setIsDisabled(true);
    }

    function cancelInput() {
        setName(userData.name);
        setLogin(userData.email);
        setPassword('');
    }

    function handleChange(e, value) {
        value(e.target.value);
    }

    //Выйти с аккаунта
    function signOut() {
        const refreshToken = localStorage.getItem('refreshToken');
        dispatch(fetchSignOut(refreshToken))
    };


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
                        <Input value={name} type="text" placeholder="Имя" onChange={(e) => {handleChange(e, setName)}} disabled={isDisabled} />
                        <div className={style.profile__image} onClick={toggleBlockInput}>
                            {isDisabled ?
                                <EditIcon type="primary" />
                                :
                                <CloseIcon type="primary" />
                            }
                        </div>
                    </div>
                    <div className={style.profile__box}>
                        <Input value={login} type="email" placeholder="Логин" onChange={(e) => {handleChange(e, setLogin)}} disabled={isDisabled} />
                        <div className={style.profile__image} onClick={toggleBlockInput}>
                            {isDisabled ?
                                <EditIcon type="primary" />
                                :
                                <CloseIcon type="primary" />
                            }
                        </div>
                    </div>
                    <div className={style.profile__box}>
                        <Input value={password} type="password" placeholder="Пароль" onChange={(e) => {handleChange(e, setPassword)}} disabled={isDisabled} />
                        <div className={style.profile__image} onClick={toggleBlockInput}>
                            {isDisabled ?
                                <EditIcon type="primary" />
                                :
                                <CloseIcon type="primary" />
                            }
                        </div>
                    </div>
                    <div className={style.profile__container}>
                        <Button type={'secondary'} className={`text text_type_main-default mr-7`} onClick={cancelInput}>Отмена</Button>
                        <Button type={'primary'} onClick={updateUserInfo}>Сохранить</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;