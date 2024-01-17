import { combineReducers } from 'redux';
import { searchReducer } from './slices/searchSlice';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { catalogReducer } from './slices/catalogSlice';
import { cartReducer } from './slices/cartSlice';
import cartControl from './middleWares/cartControl';

const rootReducer = combineReducers({
  search: searchReducer,
  catalog: catalogReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartControl),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
