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
        logIn: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            state.isLogIn = true;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isLogIn = false;
            state.error = action.payload;
        },
        logOut: (state) => {
            state.currentUser = null;
            state.isLogIn = false;
            state.error = null;
        }
    },
});

export const { logIn, loginFailure, logOut } = authSlice.actions;

export default authSlice.reducer;