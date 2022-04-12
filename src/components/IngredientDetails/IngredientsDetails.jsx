import React from 'react';
import PropTypes from "prop-types";
import ingredientsDetailsStyle from './ingredientsDetails.module.css'

 function IngredientsDetails(props) {
    return (
        <>
            <img src={props.ingredient.image} alt={props.ingredient.name} className={ingredientsDetailsStyle.ingredientsDetails__image}/>
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

IngredientsDetails.propTypes = {
    ingredient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired
    })
}

export default IngredientsDetails;