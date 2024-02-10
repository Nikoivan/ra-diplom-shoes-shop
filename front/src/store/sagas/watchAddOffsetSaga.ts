import { call, put, retry, take } from 'redux-saga/effects';
import { RequestToAdd, catalogActions } from '../slices/catalogSlice';
import fetchApi from '../../assets/services/Api/fetchAPI';
import { ProductCardProps } from '../../components/Product/Card/Card';

function* addOffsetHandler(action: RequestToAdd) {
	try {
		const items: ProductCardProps[] = yield retry(3, 1000, fetchApi, action.payload);

		if (items?.length < 6) {
			yield put(catalogActions.setOverflow());
		}

		yield put(catalogActions.addSuccess(items));
	} catch {
		yield put(catalogActions.requestFailed('Ошибка запроса каталога'));
	}
}

export default function* watchAddOffsetSaga() {
	while (true) {
		const action: RequestToAdd = yield take(catalogActions.requestToAdd.type);
		yield call(addOffsetHandler, action);
	}
}
