import {combineReducers} from "redux";
import getAllIngredients from './reducers/getAllIngredients'
import setCurrentIngredients from "./reducers/setCurrentIngredients";

const rootReducer = combineReducers({
    getAllIngredients,
    setCurrentIngredients
});
export default rootReducer;