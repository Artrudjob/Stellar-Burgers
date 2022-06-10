import React from 'react';
import style from './order.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function Order() {
    return (
        <div className={style.order__box}>
            <div className={style.order__container}>
                <div className={style.order__flexContainer}>
                    <p className={`text text_type_digits-default pt-6`}>#034535</p>
                    <p className={`text text_type_main-small text_color_inactive pt-6`}>Сегодня, 16:20, i-GMT+3</p>
                </div>
                <h2 className={`text text_type_main-medium pt-6`}>Death Star Starship Main бургер</h2>
                <p className={`text text_type_main-small`}>Создан</p>
                <div className={`${style.order__flexContainer} mt-6 pb-6`}>
                    <img alt="img"/>
                    <div className={style.order__flexContainer}>
                        <p className={`text text_type_digits-default mr-2`}>480</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;