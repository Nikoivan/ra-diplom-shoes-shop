import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type AllowedValues = string | number;

const initialValue = '';

const initialState: { value: AllowedValues } = {
  value: initialValue,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<AllowedValues>) => {
      state.value = action.payload;
    },
    clear: (state) => {
      state.value = initialValue;
    },
  },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
export const counterSelector = (state: RootState) => state.search.value;
