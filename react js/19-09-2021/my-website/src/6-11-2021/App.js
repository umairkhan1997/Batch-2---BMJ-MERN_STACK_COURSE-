import React from "react";
import { createStore } from "redux";

// function reducer( state,  action) {
//     console.log("Reducer", state, action)
//     return 'Hello'
// }

// const store = createStore(reducer)

// // action
// store.dispatch({type: 'ADD'})
// store.dispatch({type: 'EDIT'})
// store.dispatch({type: 'ADD'})
// store.dispatch({type: 'DELETe'})

// pure function
// impure function
var num = 10;
// function sum() {
//     num += 10;
//     console.log(num)
// }

// function sum2(n) {
//     var sum = n + 10;
//     console.log(sum);
// }

// sum2(10) //
// sum2(10) //
// sum2(10) //
// sum2(10) //
// sum2(10) //
// sum2(10) //
// sum2(20) //

// var nums = [1,2,3,4,5];

// nums.splice(0, 2) // [3,4,5]
// nums.splice(0, 2)// [5]
// nums.splice(0, 2)// []
// nums.splice(0, 2)// []

function reducer(state = 0, action) {
    if(action.type === 'INCREMENT') {
        return state + 1;
    } else if(action.type === 'DERECMENT') {
        return state - 1;
    }

    return state;
}
const store = createStore(reducer)
console.log(store.getState())
store.dispatch({ type: "INCREMENT"})
console.log(store.getState())

store.dispatch({ type: "INCREMENT"})
console.log(store.getState())

store.dispatch({ type: "INCREMENT"})
console.log(store.getState())

store.dispatch({ type: "INCREMENT"})
console.log(store.getState())

store.dispatch({ type: "INCREMENT"})
console.log(store.getState())

store.dispatch({ type: "DERECMENT"})
console.log(store.getState())

store.dispatch({ type: "DOUBLE_INCREMENT"});
console.log(store.getState())

store.dispatch({ type: "DOUBLE_INCREMENT"});
console.log(store.getState())

store.dispatch({ type: "DOUBLE_INCREMENT"});
console.log(store.getState())

store.dispatch({ type: "DOUBLE_INCREMENT"});
console.log(store.getState())

store.dispatch({ type: "DOUBLE_INCREMENT"});
console.log(store.getState())

store.dispatch({ type: "DOUBLE_INCREMENT"});
console.log(store.getState())

store.dispatch({ type: "DOUBLE_INCREMENT"});
console.log(store.getState())

store.dispatch({ type: "INCREMENT"})
console.log(store.getState())


// function calc (n, n1, op) {
//     if(op == "+"){
//       return  n + n1
//     }

//     if(op == "-"){
//         return  n - n1
//       }
// }

// const result = calc(1, 2, "*")
// console.log(result)



console.log(store, 'store')
const App = () => {
    return (
        <h1>App</h1>
    )
}


// parameters
export default App;