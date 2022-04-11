import React from 'react';
import PropTypes from 'prop-types';
import constructorStyle from './burgerConstructor.module.css'
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
    const topBun = props.arrData.map(element => {
        if (element.name === 'Краторная булка N-200i') {
            return (
                <div className={constructorStyle.constructor_position} key={element._id} onClick={() => props.onClick(element)}>
                    <ConstructorElement
                        key={element._id}
                        type="top"
                        isLocked={true}
                        text={`${element.name} (верх)`}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else {
            return null;
        }
    })

    const allIngredients = props.arrData.map(element => {
        if (element.name !== 'Краторная булка N-200i') {
            return (
                <div className={constructorStyle.constructor__flexContainer} key={element._id} onClick={() => props.onClick(element)}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        key={element._id}
                        text={element.name}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else {
            return null;
        }
    })

    const bottomBun = props.arrData.map(element => {
        if (element.name === 'Краторная булка N-200i') {
            return (
                <div className={constructorStyle.constructor_position} key={element._id} onClick={() => props.onClick(element)}>
                    <ConstructorElement
                        key={element._id}
                        type="bottom"
                        isLocked={true}
                        text={`${element.name} (низ)`}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else {
            return null;
        }
    })


    /*const constructorElements = props.arrData.map(element => {
        if (element.name === 'Краторная булка N-200i') {
            return (
                <div className={constructorStyle.constructor_position} key={element._id} onClick={() => props.onClick(element)}>
                    <ConstructorElement
                        key={element._id}
                        type="top"
                        isLocked={true}
                        text={`${element.name} (верх)`}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else if ((element.name !== 'Краторная булка N-200i') && (element.name !== 'Флюоресцентная булка R2-D3')) {
            return (
                <div className={constructorStyle.constructor__flexContainer} key={element._id} onClick={() => props.onClick(element)}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        key={element._id}
                        text={element.name}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else if (element.name === 'Флюоресцентная булка R2-D3') {
            return (
                <div className={constructorStyle.constructor_position} key={element._id} onClick={() => props.onClick(element)}>
                    <ConstructorElement
                        key={element._id}
                        type="bottom"
                        isLocked={true}
                        text={`${element.name} (низ)`}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else {
            return null;
        }
    }) */

    return (
        <section className={`${constructorStyle.constructor} mt-25`}>
            <div className={`${constructorStyle.constructor__boxList}`}>
                {topBun}
                <div className={`${constructorStyle.constructor__boxList} ${constructorStyle.constructor__boxList_scrollbar}`}>
                    {allIngredients}
                </div>
                {bottomBun}
            </div>
            <div className={`${constructorStyle.constructor__info} mt-10`}>
                <div>
                    <p className={`text text_type_digits-medium ${constructorStyle.constructor__infoText}`}>2510</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="medium" onClick={props.openOrderDetails}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
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
    onClick: PropTypes.func,
    openOrderDetails: PropTypes.func
}

export default BurgerConstructor;