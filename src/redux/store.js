import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/usersSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
