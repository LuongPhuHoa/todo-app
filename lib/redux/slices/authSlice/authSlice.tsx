import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./thunks";
import { User } from "@/database";

export interface AuthState {
    currentUser: User | null;
    isLogIn: boolean;
    error: string | null;
}

const initialState: AuthState = {
    currentUser: null,
    isLogIn: false,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            state.currentUser = null;
            state.isLogIn = false;
            state.error = null;
        }
    },
    extraReducers: {
        [loginUser.pending.type]: (state) => {
            state.error = null;
        },
        [loginUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            state.isLogIn = true;
        },
        [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;