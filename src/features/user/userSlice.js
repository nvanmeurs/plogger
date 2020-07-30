import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const signInUser = createAsyncThunk('user/signUpStatus', async (loginUser, thunkAPI) => {
    // TODO: Call User register API
    return {
        username: 'dummy',
        email: 'dummy@dummy.com',
        bio: 'dummy',
        token: 'dummy',
        image: 'dummy',
    };
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        activeUser: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [signInUser.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },

        [signInUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },

        [signInUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.activeUser = action.payload;
        },
    },
});
