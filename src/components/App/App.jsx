import React from 'react';
import appStyle from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";

function App() {
  const baseUrl = 'https://norma.nomoreparties.space/api/ingredients';
  const [state, setState] = React.useState({
      error: null,
      loading: false,
      items: []
  })

  React.useEffect(() => {
      fetch(baseUrl)
          .then(res => res.json())
          .then((result) => {
              let arrResult = result.data;
              arrResult[1] = arrResult.splice(14, 1, arrResult[1])[0];      /*переставляю местами элементы массива 1 и 14, для того, */
              setState({...state, loading: true, items: result.data}) /* чтобы в дальнейшем в нужном порядке расположить их в верстке */
          })
          .catch((err) => {
              setState({...state, error: err})
              console.log(`Что-то пошло не так: ${err}`);
          })
  }, [])

    const [isIngredientDetailOpened, setIsIngredientDetailOpened] = React.useState(false)
    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);
    const [currentIngredient, setCurrentIngredient] = React.useState({})

    function openOrderDetails() {
        setIsOrderDetailsOpened(true)
    }

    function openIngredientsDetails() {
        setIsIngredientDetailOpened(true)
    }

    function closeModals() {
        setIsOrderDetailsOpened(false)
        setIsIngredientDetailOpened(false)
    }

    function handleEscKeydown(e) {
      if (e.key === 'Escape') {
          closeModals()
      }
    }

    function handleIngredientClick(ingredient) {
        setCurrentIngredient(ingredient);
        setIsIngredientDetailOpened(true);
    }

  return (
    <div className={appStyle.App}>
      <AppHeader />
      <main className={appStyle.app__main}>
          <BurgerIngredients arrData={state.items} />
          <BurgerConstructor arrData={state.items}
              onClick={handleIngredientClick}
              openOrderDetails={openOrderDetails}
                             /* openIngredientsDetails = {openIngredientsDetails} */ />
      </main>
        {isOrderDetailsOpened && (
            <Modal onOverlayClick={closeModals} onEscKeydown={handleEscKeydown}>
               <OrderDetails onOverlayClick={closeModals}/>
            </Modal>
        )}
        {isIngredientDetailOpened && (
            <Modal onOverlayClick={closeModals} onEscKeydown={handleEscKeydown}>
                <IngredientsDetails onOverlayClick={closeModals} ingredient={currentIngredient} />
            </Modal>
        )}
    </div>
  );
}

export default App;
