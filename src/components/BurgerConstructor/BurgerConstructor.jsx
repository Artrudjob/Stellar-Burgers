import React from 'react';
import burgersStyle from './burgerConstructor.module.css';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props) {
    const bunsList = props.data.filter(dataItem => dataItem.type === "bun").map(item => {
        return (
            <div key={item._id} className={burgersStyle.burgersMenu__flexBox}>
                <Counter count={0} size={"default"} />
                <img className={burgersStyle.burgersMenu__image} src={item.image} alt={item.name} />
                <div className={`${burgersStyle.burgersMenu__miniFlexBox} mt-2`}>
                    <p className={'text text_type_digits-default pr-2'}>{item.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-small mt-2 ${burgersStyle.burgersMenu__text_position}`}>{item.name}</p>
            </div>
        )
    });

    const saucesList = props.data.filter(dataItem => dataItem.type === "sauce").map(item => {
        return (
            <div key={item._id} className={burgersStyle.burgersMenu__flexBox}>
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

    const toppingsList = props.data.filter(dataItem => dataItem.type === "main").map(item => {
        return (
            <div key={item._id} className={burgersStyle.burgersMenu__flexBox}>
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
                <h1 className={'text text_type_main-large mt-10'}>{props.title}</h1>
                <button
                    className={`${burgersStyle.burgersMenu__button} mt-5 pt-4 pb-4 text_type_main-small`}>{props.buns}</button>
                <button
                    className={`${burgersStyle.burgersMenu__button} mt-5 pt-4 pb-4 text_type_main-small`}>{props.sauces}</button>
                <button
                    className={`${burgersStyle.burgersMenu__button} mt-5 pt-4 pb-4 text_type_main-small`}>{props.toppings}</button>
                <h2 className={'text text_type_main-medium mt-10'}>{props.buns}</h2>
                <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {bunsList}
                </div>
                <h2 className={'text text_type_main-medium mt-10'}>{props.sauces}</h2>
                <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {saucesList}
                </div>
                <h2 className={'text text_type_main-medium mt-10'}>{props.toppings}</h2>
                <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {toppingsList}
                </div>
            </section>
    )
}

export default BurgerConstructor;

