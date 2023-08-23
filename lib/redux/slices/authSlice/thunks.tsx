import { deleteCookie } from 'cookies-next';
import { authenticate, deAuthenticate, restoreAuthState } from './authSlice';
import { createAppAsyncThunk } from '../../createAppAsyncThunk';
import axios from 'axios';

// export const loginUser = (user: {}) => async (dispatch: any) => {
//   dispatch(authenticate(user));
// };

// export const logoutUser = () => async (dispatch: any) => {
//   deleteCookie('token');
//   dispatch(deAuthenticate());
// };

// export const checkLogin = (user: {}) => async (dispatch: any) => {
//   dispatch(restoreAuthState(user));
// };

export const loginUser = createAppAsyncThunk('auth/login', async (user: {}) => {
  return user;
});

export const logoutUser = createAppAsyncThunk('auth/logout', async () => {
  deleteCookie('token');
});

export const checkLogin = createAppAsyncThunk('auth/verify', async () => {
  const { data } = await axios.get('/api/auth/verify');
  console.log(data); 
  return data;
});