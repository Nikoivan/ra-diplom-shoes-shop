import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type AllowedValues = string | number;

const initialValue = '';

const initialState: { value: string } = {
	value: initialValue,
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		changeSearch: (state, action: ChangeSearchType) => {
			state.value = action.payload;
		},
		clearSearch: (state) => {
			state.value = initialValue;
		},
	},
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
export const counterSelector = (state: RootState) => state.search.value;

export type ChangeSearchType = PayloadAction<string>;
