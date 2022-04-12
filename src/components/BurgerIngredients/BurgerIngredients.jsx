import React from 'react';
import PropTypes from 'prop-types';
import burgersStyle from './burgerIngredients.module.css';
import {Counter, CurrencyIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('bun')

    const bunsList = props.arrData.filter(dataItem => dataItem.type === "bun").map(item => {
        return (
            <div key={item._id} className={burgersStyle.burgersMenu__flexBox} onClick={() => props.onClick(item)}>
                <Counter count={1} size={"default"} />
                <img className={burgersStyle.burgersMenu__image} src={item.image} alt={item.name} />
                <div className={`${burgersStyle.burgersMenu__miniFlexBox} mt-2`}>
                    <p className={'text text_type_digits-default pr-2'}>{item.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-small mt-2 ${burgersStyle.burgersMenu__text_position}`}>{item.name}</p>
            </div>
        )
    });

    const saucesList = props.arrData.filter(dataItem => dataItem.type === "sauce").map(item => {
        return (
            <div key={item._id} className={burgersStyle.burgersMenu__flexBox} onClick={() => props.onClick(item)}>
                <Counter count={1} size={"default"} />
                <img className={burgersStyle.burgersMenu__image} src={item.image} alt={item.name} />
                <div className={`${burgersStyle.burgersMenu__miniFlexBox} mt-2`}>
                    <p className={'text text_type_digits-default pr-2'}>{item.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-small mt-2 ${burgersStyle.burgersMenu__text_position}`}>{item.name}</p>
            </div>
        )
    });

    const toppingsList = props.arrData.filter(dataItem => dataItem.type === "main").map(item => {
        return (
            <div key={item._id} className={burgersStyle.burgersMenu__flexBox} onClick={() => props.onClick(item)}>
                <Counter count={1} size={"default"} />
                <img className={burgersStyle.burgersMenu__image} src={item.image} alt={item.name} />
                <div className={`${burgersStyle.burgersMenu__miniFlexBox} mt-2`}>
                    <p className={'text text_type_digits-default pr-2'}>{item.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-small mt-2 ${burgersStyle.burgersMenu__text_position}`}>{item.name}</p>
            </div>
        )
    });

    return (
            <section className={burgersStyle.burgersMenu}>
                <h1 className={'text text_type_main-large mt-10'}>Соберите бургер</h1>
                <div style={{ display: 'flex', marginTop: '20px' }}>
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
                <div className={burgersStyle.burgersMenu_scrollbar}>
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
    arrData: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number
    })),
    onClick: PropTypes.func.isRequired
}

export default BurgerIngredients;

