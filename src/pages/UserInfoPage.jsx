import React from 'react';
import { Input, EditIcon, CloseIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../styles/UserInfoPage.module.css';
import {updateInfo} from "../services/actions/updateUserInfo";
import {useDispatch, useSelector} from "react-redux";

function UserInfoPage() {
    const dispatch = useDispatch();

    const userData = useSelector(store => store.authReducer);

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
        dispatch(updateInfo(login, name));
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

    return (
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
    )
}

export default UserInfoPage;