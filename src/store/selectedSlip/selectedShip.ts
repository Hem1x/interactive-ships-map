import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShip } from '../../models/ship';

const initialState: { selectedShip: IShip | null } = {
  selectedShip: null,
};

export const selectedSlice = createSlice({
  name: '@@selectedSlice',
  initialState,
  reducers: {
    setSelectedShip(state, action: PayloadAction<IShip | null>) {
      state.selectedShip = action.payload;
    },
  },
});

export default selectedSlice.reducer;
export const { setSelectedShip } = selectedSlice.actions;
