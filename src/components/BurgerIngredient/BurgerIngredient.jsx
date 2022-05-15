import React from 'react';
import PropTypes from 'prop-types';
import burgersStyle from './burgerIngredient.module.css';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDrag} from "react-dnd";
import {shallowEqual, useSelector} from "react-redux";

function BurgerIngredient(props) {
    const ingredientsBurger = useSelector(store => store.burgerConstructor.data, shallowEqual)
    const [countIngredient, setCountIngredient] = React.useState(0);

    const element = props.element;
    const keyElement = element._id;
    const [{isDrag}, dragRef] = useDrag({
        type: 'NEW_INGREDIENT',
        item: element,
        collect: (monitor) => ({
            isDrag: monitor.isDragging()
        }),
    });

    React.useEffect(() => {
        setCountIngredient(ingredientsBurger.filter(el => el._id === element._id).length)
    }, [ingredientsBurger])

    const border = isDrag && '2px solid #4c4cff';
    const borderRadius = isDrag && '10px';

    if (element.type === 'bun') {
        return (
            <div style={{border, borderRadius}} key={keyElement} className={burgersStyle.burgersMenu__flexBox} onClick={() => props.onClick(element)} ref={dragRef}>
                {countIngredient !== 0 && <Counter count={countIngredient} size={"default"}/>}
                <img className={burgersStyle.burgersMenu__image} src={element.image} alt={element.name}/>
                <div className={`${burgersStyle.burgersMenu__miniFlexBox} mt-2`}>
                    <p className={'text text_type_digits-default pr-2'}>{element.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`text text_type_main-small mt-2 ${burgersStyle.burgersMenu__text_position}`}>{element.name}</p>
            </div>
        )
    } else if (element.type === 'sauce') {
        return (
            <div style={{border, borderRadius}} key={keyElement} className={burgersStyle.burgersMenu__flexBox} onClick={() => props.onClick(element)} ref={dragRef}>
                {countIngredient !== 0 && <Counter count={countIngredient} size={"default"}/>}
                <img className={burgersStyle.burgersMenu__image} src={element.image} alt={element.name}/>
                <div className={`${burgersStyle.burgersMenu__miniFlexBox} mt-2`}>
                    <p className={'text text_type_digits-default pr-2'}>{element.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`text text_type_main-small mt-2 ${burgersStyle.burgersMenu__text_position}`}>{element.name}</p>
            </div>
        ) 
    } else if (element.type === 'main') {
        return (
            <div style={{border, borderRadius}} key={keyElement} className={burgersStyle.burgersMenu__flexBox} onClick={() => props.onClick(element)} ref={dragRef}>
                {countIngredient !== 0 && <Counter count={countIngredient} size={"default"}/>}
                <img className={burgersStyle.burgersMenu__image} src={element.image} alt={element.name}/>
                <div className={`${burgersStyle.burgersMenu__miniFlexBox} mt-2`}>
                    <p className={'text text_type_digits-default pr-2'}>{element.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`text text_type_main-small mt-2 ${burgersStyle.burgersMenu__text_position}`}>{element.name}</p>
            </div>
        )
    }
}

BurgerIngredient.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default BurgerIngredient;