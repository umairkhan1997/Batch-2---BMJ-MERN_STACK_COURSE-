import React, { useEffect, useState } from "react";
// non exist

// shouldComponentUpdate

// exist
// componentDidMount
// componentDidUpdate
// componentWillUnMount
// state

// hook

// class App1 extends React.Component {
//     componentDidMount() {}
//     render() {}
// }
import useTimer from "./hooks/useTimer";
import Todo  from "./components/Todo/Todo";
import useTodo from "./hooks/useTodo";
import useTitle from "./hooks/useTitle";
// const Counter = () => {
//     const [ counter, setCounter] = useState(0)
//     const [ value, setValue] = useState("")
//     const [timer, setTimer] = useTimer();
//     const [todos, setTodos] = useState([]);
//     console.log("setTimer", setTimer)
//     // setTimeout(() => {}, 1000)
//     // setTimeout(() => {}, 1000)
//     // setTimeout(() => {}, 1000)
//     // setTimeout(() => {}, 1000)
//     // useEffect(() => {
//     //     console.log("Component Did Mounted")
//     //    const interval =  setInterval(() => {
//     //         // setTodos((todos) => {})
//     //         //stale variable
//     //         console.log("set Interval ")
//     //         setCounter((prevCounter) => {
//     //             return prevCounter + 1
//     //         })
//     //     }, 1000)

//     //     // clean up function
//     //     return () => {
//     //         clearInterval(interval)
//     //     }
//     // }, []) // dependencies
//     // useEffect(() => {

//     // }, [])
//     // useEffect(() => {

//     // }, [])

//     // useEffect(() => {

//     // }, [])
//     useEffect(() => {
//        const interval = setInterval(() => {
//             //stale variable
//             setCounter(counter + 1)
//         }, 1000)

//         return () => {
//             clearInterval(interval)
//         }
//     }, [counter])

//     // componentDidMount
//      // componentDidUpdate

//     const onIncrement = () => { setCounter(counter + 1) }

//     const onInputChange = (event) => {
//         setValue(event.target.value)
//     }

//     const updateCounter = () => {
//         setCounter(parseInt(value))
//     }

//     return (
//         <div>
//             <h1>Timer Hook: {timer}</h1>
//             <input value={value} onChange={onInputChange}/>
//             <button onClick={updateCounter}>Set</button>
//             <h1>{counter}</h1>
//             {/* <button onClick={onIncrement}>Click</button> */}
//         </div>
//     )
// }

const DoubleCounter = () => {
    const [timer, increment, decrement] = useTimer();
    return (
      <div>
        <h1>Double Timer Hook: {timer * 2}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
}
const Counter = () => {
  const [timer, increment, decrement] = useTimer();
  return (
    <div>
      <h1>Timer Hook: {timer}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const Todo2 = () => {
  const [value, setValue] = useState("")
  const {todos, addTodo} = useTodo();
  // useTitle('Todos: ' + todos.length)
  const onInputChange = (event) => {
    setValue(event.target.value)
  }

  const onAddTodo = () => {
    addTodo(value)
    setValue("")
  }
  return (
    <div>
      <input value={value} onChange={onInputChange}/>
      <button onClick={onAddTodo}>Add</button>
      <ul>
        {todos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}
const App = () => {
  const [showCounter, setShowCounter] = useState(false);

  const onToggleCounter = () => {
    setShowCounter(!showCounter);
  };

 
  return (
    <div>
        <Todo />
        <Todo2 />
      {/* {showCounter ? <Counter /> : null}
      <DoubleCounter />
      <button onClick={onToggleCounter}>Toggle</button> */}
    </div>
  );
};

export default App;
