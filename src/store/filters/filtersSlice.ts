import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShip } from '../../models/ship';
import { IRequest } from '../../models/shipApi';

interface IFilterState {
  selectedDate: string | null;
  selectedShip: IShip | null;
  selectedRequest: IRequest | undefined;
}

const initialState: IFilterState = {
  selectedDate: new Date().toString(),
  selectedShip: null,
  selectedRequest: undefined,
};

export const filterSlice = createSlice({
  name: '@@filter',
  initialState,
  reducers: {
    setSelectedDate(state, action: PayloadAction<string | null>) {
      state.selectedDate = action.payload;
    },
    setSelectedShip(state, action: PayloadAction<IShip | null>) {
      state.selectedShip = action.payload;
    },
    setSelectedRequest(state, action: PayloadAction<IRequest | undefined>) {
      state.selectedRequest = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setSelectedDate, setSelectedShip, setSelectedRequest } =
  filterSlice.actions;
