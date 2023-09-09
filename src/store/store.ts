import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shipsApi } from './shipApi/shipApi';
import filterReducer from './filters/filtersSlice';
import { api } from './api/api';

const rootReducer = combineReducers({
  [shipsApi.reducerPath]: shipsApi.reducer,
  [api.reducerPath]: api.reducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shipsApi.middleware).concat(api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
