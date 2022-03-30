import React from 'react';
import burgersStyle from './burgerIngredients.module.css';
import {Counter, CurrencyIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('one')

    const bunsList = props.data.filter(dataItem => dataItem.type === "bun").map(item => {
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
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                        {props.buns}
                    </Tab>
                    <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                        {props.sauces}
                    </Tab>
                    <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                        {props.toppings}
                    </Tab>
                </div>
                <div className={burgersStyle.burgersMenu_scrollbar}>
                    <h2 className={'text text_type_main-medium mt-10'}>{props.buns}</h2>
                    <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {bunsList}
                    </div>
                    <h2 className={'text text_type_main-medium mt-15'}>{props.sauces}</h2>
                    <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {saucesList}
                    </div>
                    <h2 className={'text text_type_main-medium mt-10'}>{props.toppings}</h2>
                    <div className={`${burgersStyle.burgersMenu__gridContainer} mt-6`}>
                    {toppingsList}
                    </div>
                </div>
            </section>
    )
}

export default BurgerIngredients;

