import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { searchActions } from '../../store/slices/searchSlice';

const Search = () => {
	const searchValue = useAppSelector((state) => state.search.value);
	const dispatch = useAppDispatch();

	const onChangeHadler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(searchActions.changeSearch(e.target.value));
	};

	return (
		<form className='catalog-search-form form-inline'>
			<input
				className='form-control'
				placeholder='Поиск'
				value={searchValue}
				onChange={onChangeHadler}
			/>
		</form>
	);
};

export default Search;
