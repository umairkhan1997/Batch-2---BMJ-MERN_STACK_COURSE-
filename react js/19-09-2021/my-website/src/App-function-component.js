import { useState } from "react";
import Todo  from "./components/Todo/Todo";
import "./App.css"
// props
// functional component
// state
// map
// key
// conditional rendering
// styling - CSS , inline-styling
// class base component
// lifecycle state

const App = () => {
  const [isLoggedIn, setLogginStatus] = useState(true);
  const login = () => {
    setLogginStatus(true);
  };

  const logout = () => {
    setLogginStatus(false);
  };

  // const renderButton = () => {
  //   if(isLoggedIn === true) {
  //     return <button onClick={logout}>Logout</button>
  //   } else {
  //     return <button onClick={login}>Login</button>
  //   }
  // }
  return (
    <div>
      {/* {renderButton()} */}
      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn === true ? "Logout" : "Login"}
      </button>
      { isLoggedIn ? <Todo /> : <div>Please Login in</div>}
    </div>
  );
};

export default App;
