import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFoodItems() {
  try {
    console.log('Saga triggered');
    
    const foodItems = yield call(axios.get, 'http://localhost:5000/foodItems');
    console.log('API call successful:', foodItems.data);

    yield put({ type: 'FETCH_FOOD_SUCCESS', payload: foodItems.data });
  } catch (error) {
    console.error('Error during API call:', error);
    yield put({ type: 'FETCH_FOOD_FAILURE', error: error.message });
  }
}

function* foodSaga() {
  console.log('Watching for FETCH_FOOD_REQUEST actions...');
  yield takeLatest('FETCH_FOOD_REQUEST', fetchFoodItems);
}

export default foodSaga;
