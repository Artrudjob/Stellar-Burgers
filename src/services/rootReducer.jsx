import {combineReducers} from "redux";
import getAllIngredients from './reducers/getAllIngredients'
import setCurrentIngredients from './reducers/setCurrentIngredients';
import getOrderNumber from './reducers/getOrderNumber';
import burgerConstructor from './reducers/burgerConstructor';
import authReducer from './reducers/authReducer';
import wsReducer from './reducers/wsReducer';


const rootReducer = combineReducers({
    getAllIngredients,
    setCurrentIngredients,
    getOrderNumber,
    burgerConstructor,
    authReducer,
    wsReducer
});
export default rootReducer;