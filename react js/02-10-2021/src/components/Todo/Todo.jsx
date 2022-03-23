import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const state = useState([]);
  const todos = state[0];
  const updateTodo = state[1];

   
  const addTodo = () => {
    updateTodo([...todos, inputValue]);
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updateTodo(newTodos);
  };


  return (
    <div>
      <h1>Todo App</h1>
      <Input onInputChange={onInputChange} />
      <Button addTodo={addTodo}></Button>
      <List todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default Todo;
