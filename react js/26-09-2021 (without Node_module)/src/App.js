import { useState } from "react";

const App = () => {
  const state = useState([])
  const todos = state[0];
  const updateTodo = state[1];

  var inputValue = "";
  const onInputChange = (event) => {
    inputValue = event.target.value;
  }

  const addTodo = () => {
    updateTodo([...todos, inputValue])
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updateTodo(newTodos)
  }

  const items = todos.map((todo, index) => <li>{todo} <span onClick={function remove() {
    removeTodo(index)
  }}>X</span></li>);



  return (
    <div>
      
      <h1>Todo App</h1>
      <input placeholder="Add Todo" onChange={onInputChange} />
      <button onClick={addTodo}>Add</button>

      <ul>
      {items}
      </ul>
    </div>
  )
}

export default App;