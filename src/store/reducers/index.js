import { combineReducers } from 'redux';

import profileReducer from './profile';
import generalReducer from './general';

export default combineReducers({
  profile: profileReducer,
  general: generalReducer,
});
