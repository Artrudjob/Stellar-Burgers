import React from 'react';
import appHeaderStyle from './appHeader.module.css';
import {BurgerIcon, Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
    return (
        <section className={appHeaderStyle.header}>
            <header className={appHeaderStyle.header__container}>
                <div className={appHeaderStyle.header__containerButton }>
                    <button className={`${appHeaderStyle.header__button} pl-4 pr-4 pb-4 pt-4`}>
                        <BurgerIcon type={"primary"} />
                        <p className={`text text_type_main-default p-2 ${appHeaderStyle.header__text}`}>Конструктор</p>
                    </button>
                    <button className={`${appHeaderStyle.header__button} pl-4`}>
                        <ListIcon type="primary" />
                        <p className={`text text_type_main-default p-2 ${appHeaderStyle.header__text}`}>Лента заказов</p>
                    </button>
                </div>
                <div>
                    <Logo />
                </div>
                <div className={appHeaderStyle.header__containerButton}>
                    <button className={`${appHeaderStyle.header__button}`}>
                        <ProfileIcon type={"primary"} />
                        <p className={`text text_type_main-default  p-2 ${appHeaderStyle.header__text}`}>Личный кабинет</p>
                    </button>
                </div>
            </header>
        </section>
    )
}

export default AppHeader;