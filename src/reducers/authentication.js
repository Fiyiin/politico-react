import jwtDecode from 'jwt-decode';

const initialState = (token => ({
  currentUser: token ? jwtDecode(token) : {},
  token: null,
  isLoading: false,
  redirect: false,
  error: null,
}))(localStorage.token);


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
        currentUser: jwtDecode(action.payload.token),
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
        currentUser: jwtDecode(action.payload.token),
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
    case 'LOGOUT': {
      return {
        ...state,
        currentUser: {},
        token: null,
        isLoading: false,
        redirect: false,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
}
