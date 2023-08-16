import { deleteCookie } from 'cookies-next';
import { authenticate, deAuthenticate, restoreAuthState } from '@/lib/redux';
import Router from 'next/router';
import { createAppAsyncThunk } from '../../createAppAsyncThunk';
import { fetchUser } from './fetchUser';

export const login = createAppAsyncThunk(
    'auth/login',
    async ({req, res}: any, {dispatch, getState}: any) => {
        const {isLoggedIn} = getState().auth;
        if (isLoggedIn) {
            return;
        }
        const {isLoggedIn: loggedIn, user} = await fetchUser({req, res});
        if (loggedIn) {
            dispatch(authenticate(user));
            Router.push('/dashboard');
        }
    }
);

export const logout = createAppAsyncThunk(
    'auth/logout',
    async ({req, res}: any, {dispatch}: any) => {
        deleteCookie('token', {req, res});
        dispatch(deAuthenticate());
        Router.push('/login');
    }
);

export const restoreAuth = createAppAsyncThunk(
    'auth/restoreAuth',
    async ({req, res}: any, {dispatch}: any) => {
        const {isLoggedIn, user} = await fetchUser({req, res});
        if (isLoggedIn) {
            dispatch(restoreAuthState(user));
        }
    } 
);


