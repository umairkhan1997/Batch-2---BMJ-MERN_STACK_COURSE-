import React, {useState } from "react";
import { useHistory } from "react-router-dom";
const Login = () => {
    const [ login, setLogin ] = useState(false);
    const history = useHistory();
    const onLogin = () => {
        localStorage.setItem("login", "true")
        history.push("/dashboard")
        setLogin(true)
    }

    const onLogout = () => {
        localStorage.removeItem("login")
        history.replace("/")
        setLogin(false)
    }

    return (
        <div>
            <h1>Login</h1>
            {
                login ? <button onClick={onLogout }> Logout</button> :
                <button onClick={onLogin}> Login</button>
            }
        </div>
    )
}

export default Login;