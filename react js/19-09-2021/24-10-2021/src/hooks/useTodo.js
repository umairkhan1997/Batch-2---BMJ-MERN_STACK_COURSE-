import React, { useState } from "react";
const useTodo = () => {
  const [todos, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  const updateTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodo(newTodos);
  };

  return {
      todos,
      addTodo,
      removeTodo,
      updateTodo
  }
};

export default useTodo;
