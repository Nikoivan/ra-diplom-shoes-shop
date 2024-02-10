import { createSlice } from '@reduxjs/toolkit';
import { ProductCardProps } from '../../components/Product/Card/Card';

export type TopSalesState = {
	cards: ProductCardProps[];
	loading: boolean;
	error: string | null;
};

const initialState: TopSalesState = {
	cards: [],
	loading: false,
	error: null,
};

const topSalesSlice = createSlice({
	name: 'topSales',
	initialState,
	reducers: {
		cardsRequest: (state) => {
			state.loading = true;
		},
		cardsSuccessRequest: (state, action) => {
			state.loading = false,
			state.error = null,
			state.cards = action.payload
		},
	},
});
