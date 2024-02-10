import { put } from '@redux-saga/core/effects';
import { RequestToLoad, catalogActions } from '../slices/catalogSlice';
import fetchApi from '../../assets/services/Api/fetchAPI';
import { retry, takeLatest } from 'redux-saga/effects';
import { ProductCardProps } from '../../components/Product/Card/Card';

function* loadRequestHandler(action: RequestToLoad) {
	try {
		const items: ProductCardProps[] = yield retry(3, 1000, fetchApi, action.payload);
		if (items?.length < 6) {
			yield put(catalogActions.setOverflow());
		}

		yield put(catalogActions.requestSuccess(items));
	} catch {
		yield put(catalogActions.requestFailed('Ошибка запроса каталога'));
	}
}

export default function* watchLoadRequestSaga() {
	yield takeLatest(catalogActions.requestToLoad.type, loadRequestHandler);
}
