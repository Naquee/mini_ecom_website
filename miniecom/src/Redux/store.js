import { legacy_createStore,applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/reducer";
import { productReducer } from "./Products/reducer";


const rootReducer = combineReducers({
    product:productReducer,
    cart:cartReducer
})


const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}