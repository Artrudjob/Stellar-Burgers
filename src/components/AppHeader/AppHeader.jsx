import React from 'react';
import appHeaderStyle from './appHeader.module.css';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
    return (
        <section className={appHeaderStyle.header}>
            <header className={appHeaderStyle.header__container}>
                <nav className={appHeaderStyle.header__containerLinks}>
                    <a className={`${appHeaderStyle.header__link} pl-4 pr-4 pb-4 pt-4`} href={'www.#.ru'}>
                        <BurgerIcon type={"primary"} />
                        <p className={`text text_type_main-default p-2 ${appHeaderStyle.header__text}`}>Конструктор</p>
                    </a>
                    <a className={`${appHeaderStyle.header__link} pl-4`} href={'www.#.ru'}>
                        <ListIcon type="secondary" />
                        <p className={`text text_type_main-default text_color_inactive p-2 ${appHeaderStyle.header__text}`}>Лента заказов</p>
                    </a>
                </nav>
                <div>
                    <Logo />
                </div>
                <nav className={appHeaderStyle.header__containerLinks}>
                    <a className={`${appHeaderStyle.header__link}`} href={'www.#.ru'}>
                        <ProfileIcon type={"secondary"} />
                        <p className={`text text_type_main-default text_color_inactive p-2 ${appHeaderStyle.header__text}`}>Личный кабинет</p>
                    </a>
                </nav>
            </header>
        </section>
    )
}

export default AppHeader;