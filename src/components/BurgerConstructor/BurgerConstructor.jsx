import React, {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import constructorStyle from './burgerConstructor.module.css'
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag, useDrop} from 'react-dnd';
import ADD_TO_CONSTRUCTOR from '../../services/actions/addToConstructor';
import REMOVE_TO_CONSTRUCTOR from '../../services/actions/removeToConstructor';
import {v4 as uuid} from 'uuid'

function BurgerConstructor(props) {
    const ingredientsBurger = useSelector(store => store.burgerConstructor.data, shallowEqual)
    const dispatch = useDispatch();

    const [ingredientsPrice, setIngredientsPrice] = useState(0); // состояние начальной цены ингредиентов
    React.useEffect(() => {
        const arrDataPrice = ingredientsBurger.map(item => {
            let cost = item.price;
            if (item.type === 'bun') {
                cost = item.price * 2;
            }
            return cost;
        })
        if (arrDataPrice.length !== 0) {
            setIngredientsPrice(arrDataPrice.reduce((total, value) => total + value));
        }
    }, [ingredientsBurger])

    const [{ isOver }, dropTarget] = useDrop({
        accept: 'NEW_INGREDIENT',
        drop: (item) => dispatch(ADD_TO_CONSTRUCTOR(item)),
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })

    const topBun = ingredientsBurger.map(element => {
        if (element.type === 'bun') {
            return (
                <div className={constructorStyle.constructor_position} key={uuid()}
                     onClick={() => props.onClick(element)}>
                    <ConstructorElement
                        key={uuid()}
                        type="top"
                        isLocked={true}
                        text={`${element.name} (верх)`}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else {
            return null
        }
    })

    function deleteIngredient(e, element) {
        dispatch(REMOVE_TO_CONSTRUCTOR(element));
    }

   const allIngredients = ingredientsBurger.map(element => {
        if (element.type !== 'bun') {
            return (
                <div className={constructorStyle.constructor__flexContainer} key={uuid()}
                     onClick={() => props.onClick(element)}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        key={uuid()}
                        text={element.name}
                        price={element.price}
                        thumbnail={element.image}
                        handleClose={(e) => {e.stopPropagation(); deleteIngredient(e, element.uuid)}}
                    />

                </div>
            )
        } else {
            return null
        }
    })

    const bottomBun = ingredientsBurger.map(element => {
        if (element.type === 'bun') {
            return (
                <div className={constructorStyle.constructor_position} key={uuid()}
                     onClick={() => props.onClick(element)}>
                    <ConstructorElement
                        key={uuid()}
                        type="bottom"
                        isLocked={true}
                        text={`${element.name} (низ)`}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else {
            return null
        }
    })

    return (
        <>
            {ingredientsBurger.length === 0 ?
                <section className={`${constructorStyle.constructor__vacant} mt-25`} ref={dropTarget}>
                    <p className={'text text_type_main-medium'}>{isOver ? 'Отпускайте' : 'Перенесите ингредиенты сюда'}</p>
                </section>
                :
                <section className={`${constructorStyle.constructor} mt-25`} ref={dropTarget}>
                <div className={`${constructorStyle.constructor__boxList}`}>
                    {topBun}
                    <div className={`${constructorStyle.constructor__boxList} ${constructorStyle.constructor__boxList_scrollbar}`}>
                        {allIngredients}
                    </div>
                    {bottomBun}
                </div>
                <div className={`${constructorStyle.constructor__info} mt-10`}>
                    <div>
                        <p className={`text text_type_digits-medium ${constructorStyle.constructor__infoText}`}>{ingredientsPrice}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <Button type="primary" size="medium" onClick={props.openOrderDetails}>
                        Оформить заказ
                    </Button>
                </div>
            </section>
            }
        </>
    )
}

BurgerConstructor.propTypes = {
    onClick: PropTypes.func.isRequired,
    openOrderDetails: PropTypes.func.isRequired
}

export default BurgerConstructor;