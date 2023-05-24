import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/authentication/authSlice';
import counterReducer from '../features/counter/counterSlice';
import menuReducer from '../features/menu/menuSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  menu: menuReducer
});

export default rootReducer;