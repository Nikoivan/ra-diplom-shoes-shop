import { spawn } from 'redux-saga/effects';
import watchAddOffsetSaga from './watchAddOffsetSaga';
import watchLoadRequestSaga from './watchLoadRequestSaga';
import watchChangeSearchSaga from './watchChangeSearchSaga';

export default function* saga() {
	yield spawn(watchLoadRequestSaga);
	yield spawn(watchAddOffsetSaga);
	yield spawn(watchChangeSearchSaga);
}
