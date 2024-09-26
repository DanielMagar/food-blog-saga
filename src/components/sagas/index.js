import { all } from 'redux-saga/effects';
import foodSaga from './foodsaga';

function* rootSaga() {
  yield all([
    foodSaga(),
  ]);
}

export default rootSaga;
