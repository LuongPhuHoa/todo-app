import { deleteCookie } from 'cookies-next';
import { authenticate, deAuthenticate, restoreAuthState } from './authSlice';

export const loginUser = (user: {}) => async (dispatch: any) => {
  dispatch(authenticate(user));
};

export const logoutUser = () => async (dispatch: any) => {
  deleteCookie('token');
  dispatch(deAuthenticate());
};

export const checkLogin = (user: {}) => async (dispatch: any) => {
  dispatch(restoreAuthState(user));
};