import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRequest } from '../../models/shipApi';

interface IFilterState {
  selectedDate: string | null;
  selectedRequest: IRequest | undefined;
}

const initialState: IFilterState = {
  selectedDate: new Date().toString(),
  selectedRequest: undefined,
};

export const filterSlice = createSlice({
  name: '@@filter',
  initialState,
  reducers: {
    setSelectedDate(state, action: PayloadAction<string | null>) {
      state.selectedDate = action.payload;
    },
    setSelectedRequest(state, action: PayloadAction<IRequest | undefined>) {
      state.selectedRequest = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setSelectedDate, setSelectedRequest } = filterSlice.actions;
