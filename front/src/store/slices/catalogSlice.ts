import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CategoryItem = {
  title: string;
  id: number | null;
};

type OffsetType = {
  status: boolean;
  count: number;
  overflow: boolean;
};

export type CatalogStateType = {
  categories: CategoryItem[];
  selected: number | null;
  offset: OffsetType;
};

const initOffset = { status: false, count: 0, overflow: false };

const initialState: CatalogStateType = {
  categories: [],
  selected: null,
  offset: initOffset,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<number | null>) => {
      state.selected = action.payload;
      state.offset = initOffset;
    },
    addOffset: (state) => {
      state.offset.status = true;
      state.offset.count += 6;
    },
    overflowed: (state) => {
      state.offset.overflow = true;
    },
  },
});

export const catalogActions = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
export const catalogSelector = (state: RootState) => state.catalog;
