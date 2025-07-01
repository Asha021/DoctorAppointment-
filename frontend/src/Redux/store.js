import { configureStore } from '@reduxjs/toolkit'; // Correct spelling here
import loginReducer from '../ReduxFeatures/Login/LoginSlice'; // Correct import path for LoginSlice

export const store = configureStore({
  reducer: {
    login: loginReducer, // Use loginReducer here, which refers to the LoginSlice reducer
  },
});
