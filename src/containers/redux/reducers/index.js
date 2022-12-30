import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, CartReducer } from "./productReducer";
import { userReducer } from "./UserReducer";
import { authReducer } from "./AuthReducer";

const reducers = combineReducers({
    products: productReducer,
    product: selectedProductReducer,
    userReducer,
    authReducer,
    cart: CartReducer
});


export default reducers;