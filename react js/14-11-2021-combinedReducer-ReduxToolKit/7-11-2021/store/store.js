import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middleware = [ thunk, logger ]
const middlewares = applyMiddleware(...middleware)
const store = createStore(
    reducer,
    middlewares
);

export default store;