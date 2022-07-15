import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {wsConnectionStart} from '../../services/actions/wsActionTypes';
import {orderTime, wssUrl} from '../../consts/consts';
import {getOrderInfo} from '../../services/actions/getOrder';
import Loader from '../Loader/Loader';
import style from '../../styles/feedDetailsPage.module.css';
import {formatDistanceStrict} from 'date-fns';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {RootState} from '../../services/rootReducer';
import { IIngredients, IOrder } from '../../services/interface/interface';


function SpecificOrderDetails(): JSX.Element {
    const dispatch = useDispatch();
    const location = useLocation();
    const numberOrder = location.pathname.split(':')[1];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(wsConnectionStart(`${wssUrl}/all`));
        dispatch(getOrderInfo(numberOrder, setLoading));
    }, [SpecificOrderDetails]);

    const allIngredients = useSelector((store: RootState) => store.getAllIngredients.ingredients);
    const orderData = useSelector((store: RootState) => store.orderReducer);
    const createOrderDate: string = orderData.data.orders?.map((item: IOrder) => {return item.createdAt}).join();
    let orderDetails;

    if (orderData.data.orders.length !== 0) {
        const orderStatus: JSX.Element[] = orderData.data.orders.map((item: IOrder) => {
            if (item.status === 'done') {
                return (
                    <p className={`text text_color_success mb-15`} key={item._id}>Выполнен</p>
                )
            } else {
                return (
                    <p className={`text text_color_error mb-15`} key={item._id}>Не готов</p>
                )
            }
        });

        const arrIngredientsId: string[][] = orderData.data.orders.map((item: IOrder) => item.ingredients);

        const matchedIngredients = allIngredients.filter((item: IIngredients) => arrIngredientsId[0].includes(item._id));

        const burgerComposition = matchedIngredients.map((element: IIngredients) => {
            let countIngredient;
            if (element.type === 'bun') {
                countIngredient = 2;
            } else {
                countIngredient = 1;
            }

            return (
                <li key={element._id} className={style.feedDetails__list}>
                    <div className={style.feedDetails__gridBox}>
                        <img src={element.image_mobile} alt={element.name} className={style.feedDetails__img} />
                        <p className={`text text_type_main-default ${style.feedDetails__text}`}>{element.name}</p>
                        <div className={style.feedDetails__flexContainer}>
                            <p className={`text text_type_digits-default mr-2`}>{`${countIngredient} x ${element.price}`}</p>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                </li>
            )
        });

        const arrDataPrice = matchedIngredients.map((item: IIngredients) => {
            if (item.type === 'bun') {
                return  item.price * 2
            } else {
                return  item.price
            }
        });
        const sumPrice: number = arrDataPrice.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);

        orderDetails = orderData.data.orders.map((item: IOrder) => {
            return (
                <div className={style.feedDetails__box} key={item._id}>
                    <p className={`text text_type_main-medium mb-3`}>{item.name}</p>
                    {orderStatus}
                    <p className={`text text_type_main-medium mb-6`}>Состав:</p>
                    <div className={`${style.feed__composition} ${style.feed_scrollbar}`}>
                        <ul className={`${style.feedDetails__style_reset}`}>{burgerComposition}</ul>
                    </div>
                    <div className={`mt-10 ${style.feedDetails__flex}`}>
                        <p className={`text text_type_main-small text_color_inactive`}>{orderTime(createOrderDate, formatDistanceStrict)}</p>
                        <div className={style.feedDetails__flexContainer}>
                            <p className={`text text_type_digits-default mr-2`}>{sumPrice}</p>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                </div>
            )
        });
    };

    if (loading) {
        return (
            <Loader />
        )
    }
    return !loading &&
        <div className={`mt-10 mb-10`}>
            {orderDetails}
        </div>
}

export default SpecificOrderDetails;