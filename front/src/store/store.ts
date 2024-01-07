import { combineReducers } from 'redux';
import { searchReducer } from './slices/searchSlice';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cartReducer } from './slices/cartSlice';
import { categoriesReducer } from './slices/categorySlice';

const rootReducer = combineReducers({
  search: searchReducer,
  cart: cartReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
