const initialState = {
  curr_quote: null
};

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

export default quoteReducer;