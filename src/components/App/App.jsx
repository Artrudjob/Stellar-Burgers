import React from 'react';
import appStyle from './app.module.css';
import {baseUrl, checkResponse} from '../../consts/consts';
import store from "../../index";
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientsDetails from '../IngredientDetails/IngredientsDetails';
import { getAllIngredients } from "../../services/actions/getAllIngredients";
import { fetchIngredients } from '../../services/actions/getAllIngredients';
import { fetchOrderNumber } from '../../services/actions/orderNumber'
import { addCurrentIngredient } from '../../services/actions/addCurrentIngredient';
import { removeAllElToConstructor } from '../../services/actions/removeAllElToConstructor';
import { burgerOrderNumber } from '../../services/actions/orderNumber';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { removeCurrentIngredient } from "../../services/actions/removeCurrentIngredient";

export let arrData;

function App() {
    const dispatch = useDispatch();
    const arrData = useSelector(store => store.getAllIngredients.ingredients, shallowEqual)

    React.useEffect(() => {
        dispatch(fetchIngredients(arrData))
    }, [])

    const [isIngredientDetailOpened, setIsIngredientDetailOpened] = React.useState(false)
    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

    //Функция, которая отправляет данные с id ингредиентов и при успешном запросе возвращает номер заказа и открывает модальное окно
    function openOrderDetails() {
        store.dispatch(fetchOrderNumber(arrData, setIsOrderDetailsOpened, removeAllElToConstructor));

    }

    function closeModals() {
        setIsOrderDetailsOpened(false)
        setIsIngredientDetailOpened(false)
        dispatch(removeCurrentIngredient)
    }

    function handleIngredientClick(ingredient) {
        dispatch(addCurrentIngredient(ingredient))
        setIsIngredientDetailOpened(true);
    }

    const currentIngredient = useSelector(store => store.setCurrentIngredients.dataIngredient, shallowEqual)
    const orderNumber = useSelector(store => store.getOrderNumber.data, shallowEqual)

    return (
        <div className={appStyle.App}>
            <AppHeader/>
            <main className={appStyle.app__main}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients onClick={handleIngredientClick}/>
                    {}
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
            {isIngredientDetailOpened && (
                <Modal onOverlayClick={closeModals} closeModals={closeModals} title={'Детали ингредиента'}>
                    <IngredientsDetails onOverlayClick={closeModals} ingredient={currentIngredient}/>
                </Modal>
            )}
        </div>
    );
}

export default App;
