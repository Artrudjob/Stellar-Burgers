import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import constructorStyle from './ingredientToConstructor.module.css'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from 'react-dnd';
import { removeToConstructor } from '../../services/actions/removeToConstructor';

function IngredientToConstructor(props) {
    const ref = useRef(null);
    const dispatch = useDispatch();
    const element = props.element;

    const [{ isDragging }, dragRef] = useDrag({
        type: 'SORT_INGREDIENT',
        item: element,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isDragging ? 0 : 1;

    const [, dropRef] = useDrop({
        accept: 'SORT_INGREDIENT',
        hover: item => {
            props.moveIngredientsToConstructor(item, props.index)
        }
    })

    const dragDropRef = dragRef(dropRef(ref));


    function deleteIngredient(e, element) {
        dispatch(removeToConstructor(element));
    }

        if (element.type === 'bun') {
            return (
                <div className={constructorStyle.constructor_position}
                     onClick={() => props.onClick(element)}>
                    <ConstructorElement
                        type={props.type}
                        isLocked={true}
                        text={`${element.name} (верх)`}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        } else if (element.type !== 'bun') {
            return (
            <div className={constructorStyle.constructor__flexContainer}
                 onClick={() => props.onClick(element)} ref={dragDropRef} style={{opacity}}>
                <DragIcon type="primary"/>
                <ConstructorElement
                    text={element.name}
                    price={element.price}
                    thumbnail={element.image}
                    handleClose={(e) => {e.stopPropagation(); deleteIngredient(e, element.uuid)}}
                />
            </div>
            )
        } else if (element.type === 'bun') {
            return (
                <div className={constructorStyle.constructor_position}
                     onClick={() => props.onClick(element)}>
                    <ConstructorElement
                        type={props.type}
                        isLocked={true}
                        text={`${element.name} (низ)`}
                        price={element.price}
                        thumbnail={element.image}
                    />
                </div>
            )
        }
}

IngredientToConstructor.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default IngredientToConstructor;