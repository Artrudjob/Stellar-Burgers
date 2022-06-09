import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router-dom';

//компонент доступа к маршруту. Если пользователь не авторизирован, то идет переадресация
// на незащищенный маршрут. Если авторизирован, то пользователь может перейти на защищенный маршрут.
function ProtectedRoute({children, ...rest}) {
    const location = useLocation();

    const userData = useSelector(store => store.authReducer); //получаем из хранилища данные о пользователе(авторизован ли он, его email и его имя)

    return (
        userData.isAuthorization ?
            children
                :
            <Navigate to='/login' state={location.pathname}/>
    )
}

export default ProtectedRoute;