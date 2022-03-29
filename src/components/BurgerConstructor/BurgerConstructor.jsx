import React from 'react';
import constructorStyle from './burgerConstructor.module.css'
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";


function BurgerConstructor(props) {
    const constructorElements = props.data.map(element => {
        if (element.name === 'Краторная булка N-200i') {
            return (
                <div className={constructorStyle.constructor_position}>
                    <ConstructorElement
                        key={element._id}
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else if ((element.name !== 'Краторная булка N-200i') && (element.name !== 'Флюоресцентная булка R2-D3')) {
            return (
                <div className={constructorStyle.constructor__flexContainer} key={element._id}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={element.name}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else if (element.name === 'Флюоресцентная булка R2-D3') {
            return (
                <div className={constructorStyle.constructor_position}>
                    <ConstructorElement
                        key={element._id}
                        type="bottom"
                        isLocked={true}
                        text="Флюоресцентная булка R2-D3 (низ)"
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        }
    })

    return (
        <section className={`${constructorStyle.constructor} mt-25`}>
            <div className={constructorStyle.constructor__boxList}>
                {constructorElements}
            </div>
            <div className={`${constructorStyle.constructor__flexContainer} mt-10`}>
                <p className="text text_type_digits-medium">2510</p>
                <CurrencyIcon type="primary" />
                <Button type="primary" size="medium">
                    Нажми на меня
                </Button>
            </div>
        </section>
    )
}

export default BurgerConstructor;