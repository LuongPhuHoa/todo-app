import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { authSlice } from "./authSlice";

export const loginAsync = createAppAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(authSlice.actions.login(data));
      } else {
        dispatch(authSlice.actions.loginFailure());
      }
    } catch (error) {
      dispatch(authSlice.actions.loginFailure());
    }
  }
);

export const logoutAsync = createAppAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST'
      });
      if (response.ok) {
        dispatch(authSlice.actions.logout());
      }
    } catch (error) {}
  }
);

export const registerAsync = createAppAsyncThunk(
  'auth/register',
  async (credentials, { dispatch }) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(authSlice.actions.register(data));
      } else {
        dispatch(authSlice.actions.registerFailure());
      }
    } catch (error) {
      dispatch(authSlice.actions.registerFailure());
    }
  }
);


