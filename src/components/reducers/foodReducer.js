const initialState = {
    foodItems: [],  // Make sure this is defined
    loading: false,
    error: null,
  };
  
  const foodReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_FOOD_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_FOOD_SUCCESS':
        return { ...state, loading: false, foodItems: action.payload };
      case 'FETCH_FOOD_FAILURE':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default foodReducer;
  