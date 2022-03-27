import React from 'react';
import data from "../../utils/data";
import appStyle from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <div className={appStyle.App}>
      <AppHeader />
      <main>
          <BurgerConstructor data={data} title='Соберите бургер' buns='Булки' sauces="Соусы" toppings="Начинки"/>
      </main>
    </div>
  );
}

export default App;
