import React from 'react';
import homeStyle from './home.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { fetchOrderNumber } from '../../services/actions/orderNumber'
import { addCurrentIngredient } from '../../services/actions/addCurrentIngredient';
import { removeAllElToConstructor } from '../../services/actions/removeAllElToConstructor';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { removeCurrentIngredient } from "../../services/actions/removeCurrentIngredient";
import Loader from "../Loader/Loader";
import {useLocation} from "react-router-dom";

function Home() {
    const dispatch = useDispatch();
    const location = useLocation();
    location.state = {background: location.pathname}
    const arrData = useSelector(store => store.getAllIngredients.ingredients, shallowEqual)

    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);
    const [isLoader, setIsLoader] = React.useState(false) //Состояние загрузки

    const ingredientsBurger = useSelector(store => store.burgerConstructor.data, shallowEqual);

    //Функция, которая отправляет данные с id ингредиентов и при успешном запросе возвращает номер заказа и открывает модальное окно
    function openOrderDetails() {
        const ingredientsType = ingredientsBurger.map(item => item.type)
        if ((ingredientsType.includes('bun')) && ((ingredientsType.includes('sauce')) || (ingredientsType.includes('main')))) {
            dispatch(fetchOrderNumber(ingredientsBurger, setIsOrderDetailsOpened, setIsLoader, removeAllElToConstructor));
        } else {
            return false
        }
    }

    function closeModals() {
        setIsOrderDetailsOpened(false)
        dispatch(removeCurrentIngredient)
    }

    function handleIngredientClick(ingredient) {
        dispatch(addCurrentIngredient(ingredient))
    }

    const orderNumber = useSelector(store => store.getOrderNumber.data, shallowEqual);

    return (
        <>
            <main className={homeStyle.home__main}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients onClick={handleIngredientClick}/>
                    <BurgerConstructor
                        onClick={handleIngredientClick}
                        openOrderDetails={openOrderDetails}/>
                </DndProvider>
            </main>
            {isOrderDetailsOpened && (
                <Modal onOverlayClick={closeModals} closeModals={closeModals}>
                    <OrderDetails onOverlayClick={closeModals} title={orderNumber}/>
                </Modal>
            )}
            {isLoader && (
                <Loader />
            )}
        </>
    )
}

export default Home;
