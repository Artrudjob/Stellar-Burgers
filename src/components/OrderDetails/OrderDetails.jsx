import React from 'react';
import PropTypes from 'prop-types';
import styleOrderDetails from './orderDetails.module.css';

function OrderDetails({title}) {
    return (
        <>
            <h3 className={'text text_type_digits-large mt-30'}>{title}</h3>
            <p className={'text text_type_main-medium mt-8'}>идентификатор заказа</p>
            <div className={`${styleOrderDetails.orderDetails__img} mt-15`}></div>
            <p className={'text text_type_main-medium mt-15'}>Ваш заказ начали готовить</p>
            <p className={'text text_type_main-medium text_color_inactive mt-2 mb-30'}>Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

OrderDetails.propTypes = {
    props: PropTypes.string
}

export default OrderDetails;