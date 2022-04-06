import React from 'react';
import appStyle from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

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
              setState({...state, loading: true, items: result.data})

          })
          .catch((err) => {
              setState({...state, error: err})
              console.log(`Что-то пошло не так: ${err}`);
          })
  }, [])

  return (
    <div className={appStyle.App}>
      <AppHeader />
      <main className={appStyle.app__main}>
          <BurgerIngredients arrData={state.items} />
          <BurgerConstructor arrData={state.items} />
      </main>
    </div>
  );
}

export default App;
