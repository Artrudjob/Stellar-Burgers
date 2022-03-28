import React from 'react';
import data from "../../utils/data";
import appStyle from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <div className={appStyle.App}>
      <AppHeader />
      <main>
          <BurgerIngredients data={data} title='Соберите бургер' buns='Булки' sauces="Соусы" toppings="Начинки"/>
          <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
