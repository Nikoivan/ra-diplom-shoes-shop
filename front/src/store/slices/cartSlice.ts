import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type IdType = string;

export type CartItemType = {
  title: string;
  size: string;
  id: IdType;
  count: number;
  price: number;
  totalPrice: number;
};

export type CartStateType = {
  itemsCount: number;
  items: CartItemType[];
};

const initialState: CartStateType = {
  itemsCount: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItemType>) => {
      state.itemsCount += 1;
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<IdType>) => {
      state.itemsCount -= 1;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clear: (state) => {
      state.itemsCount = 0;
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const cartSelector = (state: RootState) => state.cart;
