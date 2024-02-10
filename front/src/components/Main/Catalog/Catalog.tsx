import { FormEvent, useEffect } from 'react';
import { Outlet } from 'react-router';

import PreloadAndErrorControl from '../../PreloadAndErrorControl/PreloadAndErrorControl';
import CatalogCategories, { CategoriesProps } from './Categories/Catalog-Categories';
import useJsonFetch from '../../../assets/services/customHooks/useJsonFetch';
import CatalogProductsList from './ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { getBaseUrl, getCatalogUrl } from '../../../assets/services/clients/http.client';
import { catalogActions } from '../../../store/slices/catalogSlice';

import './Catalog.css';

export default function Catalog() {
	const { items, isLoading, error, selected, search, offsetLoading, offsetError, overflowed } = useAppSelector(
		(state) => state.catalog
	);

	const dispatch = useAppDispatch();

	const onBtnClick = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const url = {
			search: search.trim() !== '' ? search : null,
			categoryId: selected,
			offsetCount: items.length,
		};

		dispatch(catalogActions.requestToAdd(getCatalogUrl(url)));
	};

	const {
		data: categories,
		isLoading: isCategoriesLoading,
		hasError: hasCategoriesError,
	} = useJsonFetch<CategoriesProps>(getBaseUrl() + '/api/categories');

	useEffect(() => {
		const url = getCatalogUrl({
			search: search.trim() !== '' ? search : null,
			categoryId: selected,
		});

		dispatch(catalogActions.requestToLoad(url));
	}, [dispatch, selected, search, items.length]);

	return (
		<section className='catalog'>
			<h2 className='text-center'>Каталог</h2>
			<Outlet />
			{!isCategoriesLoading && categories && <CatalogCategories categories={categories} />}
			{!isLoading && items.length > 0 && (
				<>
					<CatalogProductsList products={items} />
					{!overflowed && !offsetLoading && (
						<div className='text-center'>
							<button
								className='btn btn-outline-primary'
								onClick={onBtnClick}>
								Загрузить ещё
							</button>
						</div>
					)}
					<PreloadAndErrorControl
						isLoading={offsetLoading}
						error={offsetError}
					/>
				</>
			)}
			<PreloadAndErrorControl
				isLoading={isCategoriesLoading || isLoading}
				error={hasCategoriesError.errorText || error}
			/>
		</section>
	);
}
