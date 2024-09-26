import { combineReducers } from 'redux';
import foodReducer from './foodReducer';  // Make sure this import is correct

const rootReducer = combineReducers({
  food: foodReducer,  // Ensure 'food' key is here
  // other reducers can be added here
});

export default rootReducer;
