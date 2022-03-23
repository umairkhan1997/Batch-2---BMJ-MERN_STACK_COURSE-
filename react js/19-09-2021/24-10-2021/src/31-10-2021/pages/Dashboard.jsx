import React from "react";
import { useHistory } from "react-router-dom";
import GithubUserProfile from "../components/GithubUserProfile";

const Dashboard = () => {
    const history = useHistory();
    const onLogout = () => {
        localStorage.removeItem("login")
        history.replace("/")
    }
    return (
        <div>
            <button onClick={onLogout }> Logout</button>
            <GithubUserProfile />
        </div>
    )
}

export default Dashboard;