import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Home from "./components/Home";
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/">Home Link</Link>
                    </li>
                    <li>
                        <Link to="/about">About Link</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/users" component={Users} />
                <Route path="/user/:id" component={UserDetails} /> 
                {/* <Route path="/user/:id/:className" component={UserDetails} />  */}
            </Switch>
        </Router>
    )
}


// parameters
export default App;