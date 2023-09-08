import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shipsApi } from './shipApi/shipApi';

const rootReducer = combineReducers({
  [shipsApi.reducerPath]: shipsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shipsApi.middleware),
  devTools: true,
});
