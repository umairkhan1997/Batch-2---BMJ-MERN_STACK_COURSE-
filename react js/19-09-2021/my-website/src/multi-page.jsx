import React, { useState } from "react";


const Home = () => {
    return <h1>Home Page</h1>
}

const About = () => {
    return <h1>About Page</h1>
}


const App = () => {
    const [ page, setPage ] = useState("home")
    return (
        <div>
            <div>
                <span onClick={() => setPage("home")}>Home</span>
                <span onClick={() => setPage("about")}>About</span>
            </div>
            {page === "home" ? <Home /> : null}
            {page === "about" ? <About /> : null}
        </div>
    )
}

export default App;