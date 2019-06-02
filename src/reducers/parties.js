const initialState = {
  parties: [],
  isLoading: false,
  error: null,
};

export default function parties(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PARTIES_STARTED': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'FETCH_PARTIES_SUCCEEDED': {
      return {
        ...state,
        parties: action.payload.rows,
        isLoading: false,
        error: null,
      };
    }
    case 'FETCH_PARTIES_FAILED': {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
