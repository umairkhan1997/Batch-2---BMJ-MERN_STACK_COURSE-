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
    const newTodo = {
      text: inputValue,
      isCompleted: false
    }
    updateTodo([...todos, newTodo]);
    setInputValue("");
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updateTodo(newTodos);
  };


  const markAsComplete = (index) => {
    const newTodos = [...todos];
    const oldValue = newTodos[index].isCompleted;
    newTodos[index].isCompleted = !oldValue
    updateTodo(newTodos)
  }
  
  return (
    <div>
      <h1 className="subHeading">Todo App</h1>
      <Input onInputChange={onInputChange} value={inputValue}/>
      <Button addTodo={addTodo}></Button>
      <List todos={todos} removeTodo={removeTodo} markAsComplete={markAsComplete}/>
    </div>
  );
};

export default Todo;
