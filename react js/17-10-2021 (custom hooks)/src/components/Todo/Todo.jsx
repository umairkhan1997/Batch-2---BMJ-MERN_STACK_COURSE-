import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import useTodo from "../../hooks/useTodo";
import useTitle from "../../hooks/useTitle";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const { todos, addTodo: onAddTodo, removeTodo, updateTodo } = useTodo();
  const seTitle = useTitle();

  useEffect(() => {
    let remainingTodos = todos.filter((todo) => !todo.isCompleted)
    seTitle('Remaining todos: ' + remainingTodos.length)
  }, [todos])
  
  const addTodo = () => {
    const newTodo = {
      text: inputValue,
      isCompleted: false
    }
    onAddTodo(newTodo);
    setInputValue("");
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const markAsComplete = (index) => {
    const oldTodo = todos[index];
    oldTodo.isCompleted = !oldTodo.isCompleted
    updateTodo(index, oldTodo)
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
