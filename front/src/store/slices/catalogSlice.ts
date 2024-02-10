import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ProductCardProps } from '../../components/Product/Card/Card';

export type CategoryItem = {
	title: string;
	id: number | null;
};

export type CatalogStateType = {
	items: ProductCardProps[];
	requestUrl: string;
	categories: CategoryItem[];
	selected: number | null;
	offset: boolean;
	overflowed: boolean;
	isLoading: boolean;
	error: string | null;
	offsetLoading: boolean;
	offsetError: string | null;
	search: string;
};

const initialState: CatalogStateType = {
	items: [],
	requestUrl: '',
	categories: [],
	selected: null,
	offset: false,
	overflowed: false,
	isLoading: false,
	error: null,
	offsetLoading: false,
	offsetError: null,
	search: '',
};

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		firstRequest: (state) => {
			state.items = [];
			state.requestUrl = '';
			state.categories = [];
			state.selected = null;
			state.offset = false;
			state.overflowed = false;
			state.isLoading = false;
			state.error = null;
			state.offsetLoading = false;
			state.offsetError = null;
			state.search = '';
		},
		requestToLoad: (state, action: RequestToLoad) => {
			state.isLoading = true;
			state.error = null;
			state.requestUrl = action.payload;
		},
		requestSuccess: (state, action: PayloadAction<ProductCardProps[]>) => {
			state.isLoading = false;
			state.error = null;
			state.items = action.payload;
		},
		addSuccess: (state, action) => {
			state.offsetLoading = false;
			state.offsetError = null;
			state.items = [...state.items, ...action.payload];
		},
		requestFailed: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		selectCategory: (state, action: PayloadAction<number | null>) => {
			state.selected = action.payload;
			state.overflowed = false;
			state.offset = false;
		},
		offsetFailed: (state, action: PayloadAction<string>) => {
			state.offsetLoading = false;
			state.offsetError = action.payload;
		},
		requestToAdd: (state, action: RequestToAdd) => {
			state.offset = true;
			state.offsetLoading = true;
			state.requestUrl = action.payload;
		},
		setOverflow: (state) => {
			state.overflowed = true;
		},
		setSearch: (state, action: SearchChangeAction) => {
			state.search = action.payload;
		},
	},
});

export const catalogActions = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
export const catalogSelector = (state: RootState) => state.catalog;

export type RequestToLoad = PayloadAction<string>;
export type RequestToAdd = PayloadAction<string>;
export type SearchChangeAction = PayloadAction<string>;
