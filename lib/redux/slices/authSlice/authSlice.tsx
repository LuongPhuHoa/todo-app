import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.error = false;
      state.currentUser = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    loginFailure(state) {
      state.error = true;
    },
    register(state, action) {
      state.isLoggedIn = true;
      state.error = false;
      state.currentUser = action.payload;
    },
    registerFailure(state) {
        state.error = true;
    },
  },
});

export const { login, logout, loginFailure, register, registerFailure } = authSlice.actions;

export default authSlice.reducer;
