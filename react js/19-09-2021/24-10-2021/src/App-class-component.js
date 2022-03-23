// const App = () => {
//    return ()
// };

// lifecycle
// mounting
// updating
// unmounting

// functional component

import React from "react";


// class AutoCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     }
//     this.intervalId = null;
//   }

//   incrementCounter = () => {
//     console.log("counter updating")
//     this.setState({
//       counter: this.state.counter + 1
//     })
//   }

//   componentDidMount() {
//     // setTimeout
//     // setInterval
//     // Api call

//     this.intervalId = setInterval(this.incrementCounter, 1000)
//     console.log("child: componentDidMount")
//   }

//   // UNSAFE_componentWillUpdate() {
//   //   console.log("child: componentWillUpdate")
//   // }
//   // componentDidUpdate() {
//   //   console.log("child: componentDidUpdate")
//   // }

//   componentWillUnmount() {
//     clearInterval(this.intervalId)
//     console.log("child: componentWillUnmount")
//   }

//   render() {
    
//     return (
//       <div>Counter : {this.state.counter}</div>
//     )
//   }
// }

class Counter extends React.Component {

  shouldComponentUpdate(nextProps) {
    if(nextProps.counter <= 10) return true
    // true or false
    return false;
  }

  componentDidUpdate() {
    console.log('child updated')
  }

  render() {
    console.log("child: render", this.props.counter)
    return (
      <div>
        Counter: {this.props.counter * 2}
      </div>
    )
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      showCounter: false
    };

    console.log('parent: constructor')
  }

  componentDidMount() {
    console.log("parent:  componentDidMount")
  }

  // UNSAFE_componentWillMount() {
  //   console.log("parent: componentWillMount")
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log("parent: componentWillUpdate")
  // }

  // componentDidUpdate() {
  //   console.log("parent: componentDidUpdate")
  // }

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  toggleCounter = () => {
    this.setState({
      showCounter: !this.state.showCounter
    })
  }
  render() {
    // console.log('parent: render')
    return (
      <div>
        <h1>Counter: {this.state.counter} </h1>
        <button onClick={this.onIncrement}>Increment</button>
        <Counter counter={this.state.counter}/>
        {/* <button onClick={this.toggleCounter}>Toggle Counter</button> */}
        {/* {this.state.showCounter ? <AutoCounter text="hello world" counter={this.state.counter}></AutoCounter>: <div></div>} */}
      </div>
    );
  }
}

export default App;
