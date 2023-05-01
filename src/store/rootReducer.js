import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import counterReducer from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

export default rootReducer;