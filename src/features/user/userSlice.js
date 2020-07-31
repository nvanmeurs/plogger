import { createSelector, createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: null,
        username: null,
        email: null,
        bio: null,
        token: null,
        image: null,
    },
    reducers: {
        getUserDetailsPending(state, action) {
            state.loading = true;
            state.error = null;
        },
        getUserDetailsFailed(state, action) {
            state.loading = false;
            state.error = action.error;
        },
        getUserDetailsSuccess(state, action) {
            const { username, email, bio, token, image } = action.payload;
            state.loading = false;
            state.username = username;
            state.email = email;
            state.bio = bio;
            state.token = token;
            state.image = image;
        },
    },
});

export const { getUserDetailsPending, getUserDetailsFailed, getUserDetailsSuccess } = userSlice.actions;

export const signInUser = ({ email, password }) => async (dispatch) => {
    try {
        dispatch(getUserDetailsPending());

        // TODO: Call sign in API
        const user = {
            username: 'dummy',
            email: 'dummy@dummy.com',
            bio: 'dummy',
            token: 'dummy',
            image: 'dummy',
        };

        dispatch(getUserDetailsSuccess(user));
    } catch (err) {
        dispatch(getUserDetailsFailed(err));
    }
};

export const signUpUser = ({ email, username, password }) => async (dispatch) => {
    try {
        dispatch(getUserDetailsPending());

        // TODO: Call sign up API
        const user = {
            username: 'dummy',
            email: 'dummy@dummy.com',
            bio: 'dummy',
            token: 'dummy',
            image: 'dummy',
        };

        dispatch(getUserDetailsSuccess(user));
    } catch (err) {
        dispatch(getUserDetailsFailed(err));
    }
};

export const userSelector = (state) => state.user;
export const userIsSignedInSelector = createSelector(
    userSelector,
    (user) => user.email !== null && user.username !== null && user.token !== null
);
