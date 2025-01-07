import { combineReducers } from "redux";
import { productReducer,selectedProductReducer} from "./productreducer";

export const reducer = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer

})