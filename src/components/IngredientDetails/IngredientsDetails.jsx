import React from 'react';
import ingredientsDetailsStyle from './ingredientsDetails.module.css'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

 function IngredientsDetails(props) {
    return (
        <>
            <div className={ingredientsDetailsStyle.ingredientsDetails__boxBtn}>
                <CloseIcon type={"primary"} onClick={props.onOverlayClick}/>
            </div>
            <h3 className={`${ingredientsDetailsStyle.ingredientsDetails__title} text text_type_main-large mt-10`}>Детали игредиента</h3>
            <img src={props.ingredient.image} alt={props.ingredient.name}/>
            <p className={'text text_type_main-medium mt-4'}>{props.ingredient.name}</p>
            <div className={`${ingredientsDetailsStyle.ingredientsDetails__box} mt-8 mb-15`}>
                <div>
                    <p className={'text text_type_main-small text_color_inactive'}>Калории. ккал</p>
                    <p className={'text text_type_digits-default text_color_inactive mt-2'}>{props.ingredient.calories}</p>
                </div>
                <div>
                    <p className={'text text_type_main-small text_color_inactive'}>Белки, г</p>
                    <p className={'text text_type_digits-default text_color_inactive mt-2'}>{props.ingredient.proteins}</p>
                </div>
                <div>
                    <p className={'text text_type_main-small text_color_inactive'}>Жиры, г</p>
                    <p className={'text text_type_digits-default text_color_inactive mt-2'}>{props.ingredient.fat}</p>
                </div>
                <div>
                    <p className={'text text_type_main-small text_color_inactive'}>Углеводы, г</p>
                    <p className={'text text_type_digits-default text_color_inactive mt-2'}>{props.ingredient.carbohydrates}</p>
                </div>
            </div>
        </>
    )
};

export default IngredientsDetails;