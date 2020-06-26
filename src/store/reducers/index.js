import { combineReducers } from 'redux';

import authReducer from './auth';
import generalReducer from './general';

export default combineReducers({
  auth: authReducer,
  general: generalReducer
});
