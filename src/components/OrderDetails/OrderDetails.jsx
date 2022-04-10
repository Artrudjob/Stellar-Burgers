import React from 'react';
import styleOrderDetails from './orderDetails.module.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function OrderDetails({onOverlayClick}) {
    return (
        <>
            <div className={styleOrderDetails.orderDetails__boxBtn}>
                <CloseIcon type={"primary"} onClick={onOverlayClick}></CloseIcon>
            </div>
            <h3 className={'text text_type_digits-large mt-30'}>034536</h3>
            <p className={'text text_type_main-medium mt-8'}>идентификатор заказа</p>
            <div className={`${styleOrderDetails.orderDetails__img} mt-15`}></div>
            <p className={'text text_type_main-medium mt-15'}>Ваш заказ начали готовить</p>
            <p className={'text text_type_main-medium text_color_inactive mt-2 mb-30'}>Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

export default OrderDetails;