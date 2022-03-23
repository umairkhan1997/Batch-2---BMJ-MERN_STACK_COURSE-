import { combineReducers } from "redux";
import todoReducer from "./reducers/todo";
import counterReducer from "./reducers/counter";

const reducer = combineReducers({
    todos: todoReducer,
    counter: counterReducer
})

export default reducer;