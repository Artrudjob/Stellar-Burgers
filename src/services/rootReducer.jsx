import {combineReducers} from "redux";
import getAllIngredients from './reducers/getAllIngredients'
import setCurrentIngredients from './reducers/setCurrentIngredients';
import getOrderNumber from './reducers/getOrderNumber';


const rootReducer = combineReducers({
    getAllIngredients,
    setCurrentIngredients,
    getOrderNumber
});
export default rootReducer;