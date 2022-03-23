import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store"
import { resetUser, getGithubUser } from "./store/reducer/githubUser";
const Github = () => {
    const data = useSelector((state) => { 
        console.log(state)
        return state.github
    })
    const dispatch = useDispatch();

    const handleGetUser = () => {
        dispatch(getGithubUser('umairkhan1997'))
    }

    const handleResetUser =( ) => {
        dispatch(resetUser());
    }

    if(data.loading) {
        return <h1>Loading...</h1>
    }


    if(data.error) {
        return <h1>{data.error}</h1>
    }

    if(data.data === null) {
        return <div>
        <h1>Github User</h1>
        <button onClick={handleGetUser}>Get User</button>
    </div>
    }
    return (
        <div>
           <h1>{data.data.login}</h1>
           <button onClick={handleResetUser}>Search Another User</button>
        </div>
    )
}

const App = () => {
    return (
        <Provider store={store}>
            <h1>App 21-11-2021</h1>
            <Github />
        </Provider>
    )
}

export default App;