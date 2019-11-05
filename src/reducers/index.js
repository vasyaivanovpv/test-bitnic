import { combineReducers } from 'redux';
import { news } from './news';
import { auth } from './auth';

export const rootReducer = combineReducers({
  news,
  auth,
});
