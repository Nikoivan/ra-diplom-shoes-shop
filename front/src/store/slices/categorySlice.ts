import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CategoryItem = {
  title: string;
  id: number;
};

export type CategoryStateType = {
  categories: CategoryItem[];
  activeCategory: CategoryItem | undefined;
};

const initialState: CategoryStateType = {
  categories: [],
  activeCategory: undefined,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryItem[]>) => {
      state.categories = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<CategoryItem>) => {
      state.activeCategory = action.payload
        ? state.categories.find((item) => item.id === action.payload.id)
        : action.payload;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
export const categoriesSelector = (state: RootState) => state.categories;
