import React, {useEffect} from 'react';
import Order from '../components/Order/Order';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {wsConnectionClosed, wsConnectionStart} from '../services/actions/wsActionTypes';
import {getCookie, wssUrl} from '../consts/consts';
import {RootState} from '../services/rootReducer';

function OrdersPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart(`${wssUrl}?token=${getCookie('accessToken')?.replace('Bearer ', '')}`));

        return () => {
            dispatch(wsConnectionClosed());
        }
    }, [OrdersPage]);

    const userOrders = useSelector((store: RootState) => {
        /*if (store.wsReducer.messages.length !== 0) {
            return store.wsReducer.messages[0].orders;
        }*/
        return store.wsReducer.messages?.orders;
    }, shallowEqual);

    return (
        <div>
            <Order userOrders={userOrders}/>
        </div>
    )
}

export default OrdersPage;