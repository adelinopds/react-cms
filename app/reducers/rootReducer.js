import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import viewReducer from './viewReducer';
import demoReducer from './demoReducer';

export default combineReducers({
    user: userReducer,
    post: postReducer,
    view: viewReducer,
    demo: demoReducer
});
