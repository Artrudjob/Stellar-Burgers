import {combineReducers} from "redux";
import getAllIngredients from './reducers/get-all-ingredients'

const rootReducer = combineReducers({
    getAllIngredients
});
export default rootReducer;