import { combineReducers } from 'redux';
import authReducer from './authReducer'
import usersReducer from './usersReducer'
import gamesReducer from './gamesReducer'


export const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  games: gamesReducer
});