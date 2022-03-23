import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: INITIAL_STATE,
    reducers: {
        addTodo: (state) => {
            state.todos.push("item " + state.todos.length)
        },
        deleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1)
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
console.log(todoSlice)