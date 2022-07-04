import React, {useEffect} from 'react';
import {NavLink, Outlet, useLocation} from 'react-router-dom';
import { Button, EditIcon, Input, CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchSignOut } from '../../services/actions/signOutAccount';
import { updateInfo } from '../../services/actions/updateUserInfo';
import style from './profile.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { getUser } from "../../services/actions/getUserInfo";

function Profile() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [])

    const location = useLocation();

    //Выйти с аккаунта
    function signOut() {
        const refreshToken = localStorage.getItem('refreshToken');
        dispatch(fetchSignOut(refreshToken))
    };

    const activeStyle = {
        color: 'white'
    }

    const styleLink = ({isActive}) => isActive ? activeStyle : undefined;

    return (
        <section className={style.profile}>
            <div className={style.profile__gridBox}>
                <nav className={style.profile__navigation}>
                    <NavLink to="" end className={`text text_type_main-medium text_color_inactive mt-5 ${style.profile__links}`} style={styleLink}>Профиль</NavLink>
                    <NavLink to="orders" className={`text text_type_main-medium text_color_inactive mt-8 ${style.profile__links}`} style={styleLink}>История заказов</NavLink>
                    <NavLink to="/" className={`text text_type_main-medium text_color_inactive mt-8 ${style.profile__links}`} onClick={signOut}>Выход</NavLink>
                    {location.pathname === '/profile' ?
                        <p className={`text text_type_main-default text_color_inactive mt-25 ${style.profile_text}`}>В этом разделе вы можете
                            изменить свои персональные данные</p>
                        :
                        <p className={`text text_type_main-default text_color_inactive mt-25 ${style.profile_text}`}>В этом разделе вы можете
                            просмотреть свою историю заказов</p>
                    }
                </nav>
                <Outlet />
            </div>
        </section>
    )

    /*return (
        <section className={style.profile}>
            <div className={style.profile__gridBox}>
                <nav className={style.profile__navigation}>
                    <NavLink to="" className={`text text_type_main-medium text_color_inactive mt-5 ${style.profile__links}`} >Профиль</NavLink>
                    <NavLink to="orders" className={`text text_type_main-medium text_color_inactive mt-8 ${style.profile__links}`} >История заказов</NavLink>
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
    )*/
}

export default Profile;