import React from 'react';
import appHeaderStyle from './appHeader.module.css';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
    return (
        <section className={appHeaderStyle.header}>
            <header className={appHeaderStyle.header__container}>
                <nav className={appHeaderStyle.header__containerButton }>
                    <button className={`${appHeaderStyle.header__button} pl-4 pr-4 pb-4 pt-4`} type={"button"}>
                        <BurgerIcon type={"primary"} />
                        <p className={`text text_type_main-default p-2 ${appHeaderStyle.header__text}`}>Конструктор</p>
                    </button>
                    <button className={`${appHeaderStyle.header__button} pl-4`} type={"button"}>
                        <ListIcon type="primary" />
                        <p className={`text text_type_main-default p-2 ${appHeaderStyle.header__text}`}>Лента заказов</p>
                    </button>
                </nav>
                <div>
                    <Logo />
                </div>
                <nav className={appHeaderStyle.header__containerButton}>
                    <button className={`${appHeaderStyle.header__button}`} type={"button"}>
                        <ProfileIcon type={"primary"} />
                        <p className={`text text_type_main-default  p-2 ${appHeaderStyle.header__text}`}>Личный кабинет</p>
                    </button>
                </nav>
            </header>
        </section>
    )
}

export default AppHeader;