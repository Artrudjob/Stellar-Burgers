import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {wsConnectionStart, wsGetMessage} from '../services/actions/wsActionTypes';
import OrdersFeed from '../components/OrdersFeed/OrdersFeed';
import OrderStatistics from '../components/OrderStatistics/OrderStatistics';
import style from '../styles/FeedPage.module.css';
import Loader from '../components/Loader/Loader';
import {wssUrl} from "../consts/consts";


function FeedPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart(`${wssUrl}/all`));
    }, [dispatch])

    const wsReducer = useSelector(store => store.wsReducer);
    const wsData = wsReducer.messages[0];

    return (
        <>
            {(wsData !== undefined) ?
                <section className={style.feed}>
                    <h2 className={`text text_type_main-large mt-10`}>Лента заказов</h2>
                    <div>
                        <div className={style.feed__flex}>
                            <div className={`${style.feed__box} ${style.feed_scrollbar}`}>
                                <OrdersFeed wsData={wsData}/>
                            </div>
                            <OrderStatistics wsData={wsData}/>
                        </div>
                    </div>
                </section>
                :
                <Loader />
            }
        </>
    )
}

export default FeedPage;