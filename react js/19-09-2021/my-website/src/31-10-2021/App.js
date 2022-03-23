import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route
 } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute"
import Profile  from "./pages/Profile";

// State Management



const App = () => {
    return (
       <Router>
           <Switch>
               <Route path="/" component={Login} exact />
               <PrivateRoute path="/dashboard" component={Dashboard} />
               <PrivateRoute path="/profile" component={Profile}/>
           </Switch>
       </Router>
    )
}

export default App;