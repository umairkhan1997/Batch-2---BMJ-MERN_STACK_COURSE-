import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { addTodo, deleteTodo } from "./store/slices/todo";

const App = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            todos: state.todo.todos
        }
    })
    const addItem = () => {
        dispatch(addTodo())
    }

    const deleteItem = () => {
        dispatch(deleteTodo(0))
    }
    console.log(state.todos)
    return (
        <div>
            <ul>
            {state.todos.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <button onClick={addItem}>Add Item</button>
            <button onClick={deleteItem}>Delete Item</button>
        </div>
    )
}


const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Root;