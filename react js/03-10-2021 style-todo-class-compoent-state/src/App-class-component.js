// const App = () => {
//    return ()
// };

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  onIncrement = () => {
    console.log('old value', this.state.counter)
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    console.log(this.state, 'updated value');
    return (
      <div>
        <h1>Counter: {this.state.counter} </h1>
        <button onClick={this.onIncrement}>Increment</button>
      </div>
    );
  }
}

export default App;
