import {combineReducers} from "redux";
import getAllIngredients from './reducers/getAllIngredients'
import setCurrentIngredients from './reducers/setCurrentIngredients';
import getOrderNumber from './reducers/getOrderNumber';
import burgerConstructor from './reducers/burgerConstructor';
import restorePassword from './reducers/restorePassword';
import resetPassword from './reducers/resetPassword';
import registerUserReducer from './reducers/registerUser';


const rootReducer = combineReducers({
    getAllIngredients,
    setCurrentIngredients,
    getOrderNumber,
    burgerConstructor,
    restorePassword,
    resetPassword,
    registerUserReducer
});
export default rootReducer;