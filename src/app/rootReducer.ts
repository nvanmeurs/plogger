import {combineReducers} from "@reduxjs/toolkit";
import userSliceReducer from '../features/user/userSlice';

const rootReducer = combineReducers({
    user: userSliceReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
