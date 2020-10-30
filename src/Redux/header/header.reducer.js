const INITIAL_STATE = {
  searchBoxValue: '',
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_CHANGE':
      return {
        ...state,
        searchBoxValue: action.payload,
      };

    default:
      return state;
  }
};

export default headerReducer;
