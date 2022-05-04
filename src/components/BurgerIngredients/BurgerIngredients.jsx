import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import burgersStyle from './burgerIngredients.module.css';
import {Counter, CurrencyIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients(props) {
    const arrData = useSelector(store => store.getAllIngredients.ingredients, shallowEqual)

    const [current, setCurrent] = React.useState('bun');
    const ref = React.useRef();

    const bunsList = arrData.filter(dataItem => dataItem.type === "bun").map(item => {
        return (
            <div key={item._id} className={burgersStyle.burgersMenu__flexBox} onClick={() => props.onClick(item)}>
                <Counter count={1} size={"default"}/>
                <img className={burgersStyle.burgersMenu__image} src={item.image} alt={item.name}/>
                <div className={`${burgersStyle.burgersMenu__miniFlexBox} mt-2`}>
                    <p className={'text text_type_digits-default pr-2'}>{item.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`text text_type_main-small mt-2 ${burgersStyle.burgersMenu__text_position}`}>{item.name}</p>
            </div>
        )
    });

    const saucesList = arrData.filter(dataItem => dataItem.type === "sauce").map(item => {
        return (
            <div key={item._id} className={burgersStyle.burgersMenu__flexBox} onClick={() => props.onClick(item)}>
                <Counter count={1} size={"default"}/>
                <img className={burgersStyle.burgersMenu__image} src={item.image} alt={item.name}/>
                <div className={`${burgersStyle.burgersMenu__miniFlexBox} mt-2`}>
                    <p className={'text text_type_digits-default pr-2'}>{item.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`text text_type_main-small mt-2 ${burgersStyle.burgersMenu__text_position}`}>{item.name}</p>
            </div>
        )
    });

    const toppingsList = arrData.filter(dataItem => dataItem.type === "main").map(item => {
        return (
            <div key={item._id} className={burgersStyle.burgersMenu__flexBox} onClick={() => props.onClick(item)}>
                <Counter count={1} size={"default"}/>
                <img className={burgersStyle.burgersMenu__image} src={item.image} alt={item.name}/>
                <div className={`${burgersStyle.burgersMenu__miniFlexBox} mt-2`}>
                    <p className={'text text_type_digits-default pr-2'}>{item.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`text text_type_main-small mt-2 ${burgersStyle.burgersMenu__text_position}`}>{item.name}</p>
            </div>
        )
    });

    //меняем активную кнопку, в зависимости от количество пикселей, прокрученных от верха элемента
    function scrollIngredients() {
        const scrollTopElement = ref.current.scrollTop;

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
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={burgersStyle.burgersMenu_scrollbar} ref={ref}>
                <h2 className={'text text_type_main-medium mt-10'}>Булки</h2>
                <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {bunsList}
                </div>
                <h2 className={'text text_type_main-medium mt-15'}>Соусы</h2>
                <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {saucesList}
                </div>
                <h2 className={'text text_type_main-medium mt-10'}>Начинки</h2>
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

