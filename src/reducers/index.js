import {combineReducers} from 'redux';

import UserReducer from './userReducer';

import todoApp from '../stores/todopp';

import FriendsReducer from './Friends-Reducers/Friends.reducer';

const rootReducer = combineReducers({UserReducer,todoApp,FriendsReducer});

export default rootReducer;