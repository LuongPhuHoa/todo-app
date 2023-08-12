/* Instruments */
// import { todoSlice } from './slices'
// import { userSlice } from './slices'


// export const reducer = {
//   todo: todoSlice.reducer,
//   user: userSlice.reducer,
// }

import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { todoSlice } from './slices'
import { userSlice } from './slices'

const persistConfig = {
  key: 'user',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

export const reducer = combineReducers({
  user: persistedUserReducer,
  todo: todoSlice.reducer,
});

