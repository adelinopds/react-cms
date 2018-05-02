import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import viewReducer from './viewReducer';

export default combineReducers({
    user: userReducer,
    post: postReducer,
    view: viewReducer,
});
