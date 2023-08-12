import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./thunks";
import { User, UserState } from "@/database";


// const initialState: User = {
//     id: 0,
//     name: "",
//     email: "",
//     password: "",
//     isLogin: false,
// };

const initialState: UserState = {
    user: {
        id: 0,
        name: "",
        email: "",
        password: "",
        isLogin: false,
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<User>) => {
            state.user.id = action.payload.id;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
            state.user.isLogin = true;
        },
        logOut: (state) => {
            state.user.isLogin = false;
            state.user.id = 0;
            state.user.name = "";
            state.user.email = "";
            state.user.password = "";
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.user.isLogin = false;
            state.user.id = 0;
            state.user.name = "";
            state.user.email = "";
            state.user.password = "";
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        }
    },
});

export const { logIn, logOut, loginFailure, setUser } = userSlice.actions;
export const userStore = userSlice.reducer;