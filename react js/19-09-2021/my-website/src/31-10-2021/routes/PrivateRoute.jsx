import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({path, component:Component }) => {

  const isLogin = localStorage.getItem("login");

   return <Route path={path} render={() => {
       if(!isLogin) {
        return <Redirect to="/" />
       }

       return <Component />
   }}></Route>
}

export default PrivateRoute;