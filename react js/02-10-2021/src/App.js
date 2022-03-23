import { useState } from "react";
import Todo  from "./components/Todo/Todo";
// props
// functional component
// state
// map
// key
// conditional rendering

const App = () => {
  const [isLoggedIn, setLogginStatus] = useState(false);
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
