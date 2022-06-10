import {
  combineReducers,
  applyMiddleware,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import productReducer from "./products/reducer";

const rootReducer = combineReducers({ ecommerceData: productReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
