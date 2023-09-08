import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shipsApi } from './shipApi/shipApi';
import selectedReducer from './selectedSlip/selectedShip';

const rootReducer = combineReducers({
  [shipsApi.reducerPath]: shipsApi.reducer,
  selectedShip: selectedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shipsApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
