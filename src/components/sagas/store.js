import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';  // Combine all your reducers
import foodSaga from './foodSaga';     // Root saga that combines all your sagas

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store with the saga middleware
const store = configureStore({
  reducer: rootReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Disable thunk and add sagaMiddleware
});

// Run the root saga
sagaMiddleware.run(foodSaga);

export default store;
