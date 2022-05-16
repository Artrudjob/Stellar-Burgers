import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import burgersStyle from './burgerIngredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'

function BurgerIngredients(props) {
    const arrData = useSelector(store => store.getAllIngredients.ingredients, shallowEqual);
    const test = props.onClick;

    const [current, setCurrent] = React.useState('bun');
    const refItem = React.useRef();

    const bunsList = arrData.filter(dataItem => dataItem.type === "bun").map(item => {
        return (
            <BurgerIngredient element={item} onClick={test} key={item._id}/>
        )
    });

    const saucesList = arrData.filter(dataItem => dataItem.type === "sauce").map(item => {
        return (
            <BurgerIngredient element={item} onClick={test} key={item._id}/>
        )
    });

    const toppingsList = arrData.filter(dataItem => dataItem.type === "main").map(item => {
        return (
            <BurgerIngredient element={item} onClick={test} key={item._id}/>
        )
    });

    //меняем активную кнопку, в зависимости от количество пикселей, прокрученных от верха элемента
    function scrollIngredients() {
        const scrollTopElement = refItem.current.scrollTop;

        if (scrollTopElement < 299) {
            setCurrent('bun')
        } else if ((scrollTopElement > 298) && (scrollTopElement < 799)) {
            setCurrent('sauce')
        } else {
            setCurrent('main')
        }
    }

    return (
        <section className={burgersStyle.burgersMenu} onScroll={scrollIngredients}>
            <h1 className={'text text_type_main-large mt-10'}>Соберите бургер</h1>
            <div className={`${burgersStyle.burgersMenu__flex} mt-5`}>
                <a href={"#bun"} className={burgersStyle.burgersMenu__link}>
                    <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                        Булки
                    </Tab>
                </a>
                <a href={"#sauce"} className={burgersStyle.burgersMenu__link}>
                    <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                </a>
                <a href={"#main"} className={burgersStyle.burgersMenu__link}>
                    <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                        Начинки
                    </Tab>
                </a>
            </div>
            <div className={burgersStyle.burgersMenu_scrollbar} ref={refItem}>
                <h2 className={'text text_type_main-medium mt-10'} id={"bun"}>Булки</h2>
                <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {bunsList}
                </div>
                <h2 className={'text text_type_main-medium mt-15'} id={"sauce"}>Соусы</h2>
                <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {saucesList}
                </div>
                <h2 className={'text text_type_main-medium mt-10'} id={"main"}>Начинки</h2>
                <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {toppingsList}
                </div>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default BurgerIngredients;

