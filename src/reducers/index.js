import { combineReducers } from 'redux';
import authReducer from './authentication';
import partiesReducer from './parties';

const rootReducer = combineReducers({
  auth: authReducer,
  parties: partiesReducer,
});

export default rootReducer;
