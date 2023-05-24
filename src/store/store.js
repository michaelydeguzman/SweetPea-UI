import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {createLogger} from 'redux-logger';

const logger = createLogger();
 
export const store = configureStore({
  reducer: rootReducer,
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;