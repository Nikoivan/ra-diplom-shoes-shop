import { debounce, put } from 'redux-saga/effects';
import { ChangeSearchType, searchActions } from '../slices/searchSlice';
import { catalogActions } from '../slices/catalogSlice';

function filterChangeSearchAction(action: { type: string; payload?: string }) {
	return action.type === searchActions.changeSearch.type;
}

function* handleChangeSearchSaga(action: ChangeSearchType) {
	yield put(catalogActions.setSearch(action.payload));
}

export default function* watchChangeSearchSaga() {
	yield debounce(500, filterChangeSearchAction, handleChangeSearchSaga);
}
