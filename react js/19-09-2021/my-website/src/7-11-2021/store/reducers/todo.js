import { ADD_TODO } from "../actions/todo";

const INITIAL_STATE = {
    todos: []
}

function todoReducer (state = INITIAL_STATE, action) {
    const newState = { ...state };

    switch(action.type) {
        case ADD_TODO:
            newState.todos = [...newState.todos, action.payload]
    }

    return newState;
}

export default todoReducer;