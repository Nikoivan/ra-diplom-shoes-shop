import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItemProps } from '../../components/Main/Cart/Item/Item';
import { RootState } from '../store';
import { getCart, getReadyItems } from '../../assets/services/clients/cart.client';

const initialState: CartItemProps[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: getCart() ? getReadyItems() : initialState },
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemProps>) => {
      const dublicateItem = state.items.find(
        (item) => item.id === action.payload.id && item.size === action.payload.size
      );
      state.items = dublicateItem
        ? [
            ...state.items.filter((item) => item.id !== action.payload.id && item.size !== action.payload.size),
            {
              ...dublicateItem,
              count: dublicateItem.count + action.payload.count,
            },
          ]
        : [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export const CartActionsTypes = typeof cartActions;
export const cartReducer = cartSlice.reducer;
export const cartSelector = (state: RootState) => state.cart;
