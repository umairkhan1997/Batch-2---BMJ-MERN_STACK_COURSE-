import React, { useState } from "react"
const useTimer = () => {
 let [counter, setCounter] = useState(0);

 const incrementCounter = () => {
    setCounter(counter + 1)
 }

 const decrementCounter = () => {
    setCounter(counter -1)

 }

 return [counter, incrementCounter, decrementCounter]
}

export default useTimer;