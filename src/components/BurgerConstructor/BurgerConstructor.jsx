import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import constructorStyle from './burgerConstructor.module.css'
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { burgerIngredientsContext } from '../../context/burger-ingredients-context';

function BurgerConstructor(props) {
    const arrData = useContext(burgerIngredientsContext);


    const [ingredientsPrice, setIngredientsPrice] = useState(0); // состояние начальной цены ингредиентов
    React.useEffect(() => {
        const arrDataPrice = arrData.map(item => item.price);
        if (arrDataPrice.length !== 0) {
            setIngredientsPrice(arrDataPrice.reduce((total, value) => total + value));
        }
    }, [arrData])

    const topBun = /*props.*/arrData.map(element => {
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

   const allIngredients = /*props.*/arrData.map(element => {
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

    const bottomBun = /*props.*/arrData.map(element => {
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
                    <p className={`text text_type_digits-medium ${constructorStyle.constructor__infoText}`}>{ingredientsPrice}</p>
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
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired
    })),
    onClick: PropTypes.func.isRequired,
    openOrderDetails: PropTypes.func.isRequired
}

export default BurgerConstructor;