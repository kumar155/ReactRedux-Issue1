
import { createStore } from 'redux';
import todoApp from './todopp';
import rootReducer from '../reducers/index';

export default createStore(rootReducer);
