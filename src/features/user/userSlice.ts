import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type LoginUser = {
    email: string;
    password: string;
};

type NewUser = LoginUser & { username: string };

type User = Omit<NewUser, 'password'> & {
    token: string;
    bio: string;
    image: string;
};

type CurrentUserState = {
    activeUser: User | null;
    loading: boolean,
    error: string | null;
}

export const signUpUser = createAsyncThunk(
    'user/signUpStatus',
    async (loginUser: LoginUser, thunkAPI): Promise<User> => {
        // TODO: Call User register API
        return {
            username: 'dummy',
            email: 'dummy@dummy.com',
            bio: 'dummy',
            token: 'dummy',
            image: 'dummy'
        };
    }
)

const initialState: CurrentUserState = {
    activeUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        // @ts-ignore TS2464
        [signUpUser.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },

        // @ts-ignore TS2464
        [signUpUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },

        // @ts-ignore TS2464
        [signUpUser.fulfilled]: (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.activeUser = action.payload;
        }
    }
});

export default userSlice.reducer;
