import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "./reducer/githubUser";

const store = configureStore({
    reducer: {
        github: githubReducer
    }
});

export default store;