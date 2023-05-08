import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import canvasReducer from "./reducers/canvasReducer";


const rootReducer = combineReducers({
    canvas: canvasReducer
});

let middleware = [thunk];

if (process.env.REACT_APP_ENV === "dev") {
  middleware = [...middleware, logger];
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;