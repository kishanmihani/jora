import { combineReducers } from "redux";
import { productReducer} from "./productreducer";

export const reducer = combineReducers({
    allProducts:productReducer,

})