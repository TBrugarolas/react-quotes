import { createStore } from 'redux';

// Initial state
const initialState = {
  curr_quote: "Initial quote."
};

// Reducer function
function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case 'NEW_QUOTE':
      return {
        ...state,
        curr_quote: action.payload
      };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(quoteReducer);

console.log(store.getState());
// Output: { curr_quote: { text: "..." } }

export default store;