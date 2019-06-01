const initialState = {
  user: {},
  token: null,
  isLoading: false,
  redirect: false,
  error: null,
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case 'SIGNUP_STARTED': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SIGNUP_SUCCEEDED': {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        error: null,
      };
    }
    case 'SIGNUP_FAILED': {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case 'LOGIN_STARTED': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_SUCCEEDED': {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        redirect: true,
        error: null,
      };
    }
    case 'LOGIN_FAILED': {
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
