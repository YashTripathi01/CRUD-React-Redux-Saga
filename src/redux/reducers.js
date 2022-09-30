import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import userReducer from './api/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  userReducer,
});

export default reducers;
