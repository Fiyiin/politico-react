import { combineReducers } from 'redux';
import authReducer from './authentication';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
