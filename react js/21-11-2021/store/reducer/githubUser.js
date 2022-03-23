import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: null,
};

export const getGithubUser = createAsyncThunk("fetchGithubUser", (username) => {
  const url = "https://api.github.com/users/" + username;
  return fetch(url).then((res) => res.json());
});

const githubUserSlice = createSlice({
  name: "githubUser",
  initialState: INITIAL_STATE,
  reducers: {
    getUser: (state, action) => {
      console.log(action);
      state.data = "user";
    },
    resetUser: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = null;
    },
  },
  extraReducers: {
    [getGithubUser.pending]: (state) => {
      state.loading = true;
    },
    [getGithubUser.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getGithubUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
  // extraReducers: (builder) => {
  //     builder.addCase(getGithubUser.pending, (state) => {
  //         state.loading = true;
  //     })

  //     builder.addCase(getGithubUser.fulfilled, (state, action) =>{
  //         state.data = action.payload;
  //         state.loading = false;
  //     })

  //     builder.addCase(getGithubUser.rejected, (state, action) => {
  //         state.error = action.error.message
  //         state.loading = false
  //     })
  // }
});

export const { getUser, resetUser } = githubUserSlice.actions;
export default githubUserSlice.reducer;
