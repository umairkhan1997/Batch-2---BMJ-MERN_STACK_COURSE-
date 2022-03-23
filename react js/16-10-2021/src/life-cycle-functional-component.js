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

const Counter = () => {
    const [ counter, setCounter] = useState(0)
    const [ value, setValue] = useState("")
    const [todos, setTodos] = useState([]);
    // setTimeout(() => {}, 1000)
    // setTimeout(() => {}, 1000)
    // setTimeout(() => {}, 1000)
    // setTimeout(() => {}, 1000)
    // useEffect(() => {
    //     console.log("Component Did Mounted")
    //    const interval =  setInterval(() => {
    //         // setTodos((todos) => {})
    //         //stale variable
    //         console.log("set Interval ")
    //         setCounter((prevCounter) => {
    //             return prevCounter + 1
    //         })
    //     }, 1000) 


    //     // clean up function
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, []) // dependencies
    // useEffect(() => {
      
    // }, [])
    // useEffect(() => {
      
    // }, [])

    // useEffect(() => {
      
    // }, [])
    useEffect(() => {
       const interval = setInterval(() => {
            //stale variable
            setCounter(counter + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [counter])

    // componentDidMount
     // componentDidUpdate

    const onIncrement = () => { setCounter(counter + 1) }

    const onInputChange = (event) => {
        setValue(event.target.value)
    }

    const updateCounter = () => {
        setCounter(parseInt(value))
    }

    return (
        <div>
            <input value={value} onChange={onInputChange}/>
            <button onClick={updateCounter}>Set</button>
            <h1>{counter}</h1>
            {/* <button onClick={onIncrement}>Click</button> */}
        </div>
    )
}
const App = () => {
    const [ showCounter, setShowCounter ] = useState(false);

    const onToggleCounter = () => {
        setShowCounter(!showCounter)
    }

    return (
        <div>
            { showCounter ? <Counter />: null }
            <button onClick={onToggleCounter}>Toggle</button>
        </div>
    )
}

export default App;