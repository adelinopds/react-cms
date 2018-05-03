import { combineReducers } from 'redux';
import userReducer from './userReducer';
import demoReducer from './demoReducer';
import postPageReducer from './pages/postReducer';
import postModelReducer from './models/postReducer';

export default combineReducers({
    user: userReducer,
    postPage: postPageReducer,
    postModel: postModelReducer,
    demo: demoReducer
});
