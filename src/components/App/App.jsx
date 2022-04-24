import React from 'react';
import appStyle from './app.module.css';
import { baseUrl, checkResponse } from '../../consts/consts';
import { BurgerIngredientsContext } from '../../context/burger-ingredients-context';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientsDetails from '../IngredientDetails/IngredientsDetails';

function App() {
  const [state, setState] = React.useState({
      error: null,
      loading: false,
      items: []
  })

    const [orderNumber, setOrderNumber] = React.useState(null) // состояние номера заказа

  React.useEffect(() => {
      fetch(`${baseUrl}ingredients`)
          .then(checkResponse)
          .then((result) => {
              setState({...state, loading: true, items: result.data})
          })
          .catch((err) => {
              setState({...state, error: err})
              console.log(`Что-то пошло не так: ${err}`);
          })
  }, [state])

    const [isIngredientDetailOpened, setIsIngredientDetailOpened] = React.useState(false)
    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);
    const [currentIngredient, setCurrentIngredient] = React.useState(null)

    //Функция, которая отправляет данные с id ингредиентов и при успешном запросе возвращает номер заказа и открывает модальное окно
    function openOrderDetails() {
        fetch(`${baseUrl}orders`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'ingredients': state.items.map(item => {
                    return item._id
                })
            })
        })
            .then(checkResponse)
            .then(result => {
                setOrderNumber(result.order.number)
                setIsOrderDetailsOpened(true) //меняет состояние на true, чтобы открылась модалка
            })
            .catch((err) => {
                console.log(`Что-то пошло не так: ${err}`);
            })
    }

    function closeModals() {
        setIsOrderDetailsOpened(false)
        setIsIngredientDetailOpened(false)
    }

    function handleIngredientClick(ingredient) {
        setCurrentIngredient(ingredient);
        setIsIngredientDetailOpened(true);
    }

  return (
    <div className={appStyle.App}>
      <AppHeader />
      <main className={appStyle.app__main}>
          <BurgerIngredientsContext.Provider value={state.items}>
              <BurgerIngredients onClick={handleIngredientClick} />
              <BurgerConstructor
                  onClick={handleIngredientClick}
                  openOrderDetails={openOrderDetails} />
          </BurgerIngredientsContext.Provider>
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
