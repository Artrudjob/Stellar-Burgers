import React from 'react';
import appStyle from './app.module.css';
import baseUrl from '../consts/consts';
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

  React.useEffect(() => {
      fetch(`${baseUrl}ingredients`)
          .then((res) => {
              if (res.ok) {
                  return res.json()
              }})
          .then((result) => {
              setState({...state, loading: true, items: result.data})
          })
          .catch((err) => {
              setState({...state, error: err})
              console.log(`Что-то пошло не так: ${err}`);
          })
  }, [])

    const [isIngredientDetailOpened, setIsIngredientDetailOpened] = React.useState(false)
    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);
    const [currentIngredient, setCurrentIngredient] = React.useState(null)

    function openOrderDetails() {
        setIsOrderDetailsOpened(true)
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
          <BurgerIngredients arrData={state.items} onClick={handleIngredientClick} />
          <BurgerConstructor arrData={state.items}
              onClick={handleIngredientClick}
              openOrderDetails={openOrderDetails} />
      </main>
        {isOrderDetailsOpened && (
            <Modal onOverlayClick={closeModals} closeModals={closeModals}>
               <OrderDetails onOverlayClick={closeModals} title={'034536'}/>
            </Modal>
        )}
        {isIngredientDetailOpened && (
            <Modal onOverlayClick={closeModals} closeModals={closeModals}>
                <IngredientsDetails onOverlayClick={closeModals} ingredient={currentIngredient} title={'Детали ингредиента'}/>
            </Modal>
        )}
    </div>
  );
}

export default App;
