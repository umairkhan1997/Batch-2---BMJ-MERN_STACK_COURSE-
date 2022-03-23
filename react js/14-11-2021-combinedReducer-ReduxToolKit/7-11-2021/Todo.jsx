import React from "react";
import { connect } from "react-redux";
import {addTodo, ADD_TODO} from "./store/actions/todo"

const Todo = (props) => {
    const onAddItem = () => {
        props.dispatch(addTodo("item " + Math.floor(Math.random() * 100000)))
        // props.dispatch({ 
        //     type: ADD_TODO,
        //     payload: "item " + Math.floor(Math.random() * 100000)
        // })
    }


    const onAddItem2 = () => {
        // props.dispatch({ 
        //     type: ADD_TODO,
        //     payload: "item " + Math.floor(Math.random() * 100000)
        // })
    }


    console.log(props)
    return (
        <div>
            <button onClick={onAddItem}>Add Item</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo
    }
}
const connectTodo = connect(mapStateToProps);


export default connectTodo(Todo);