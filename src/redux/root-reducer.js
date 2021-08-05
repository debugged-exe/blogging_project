import { combineReducers } from 'redux';

//session management
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import tagsReducer from "./tags/tags.reducer";
import blogReducer from './blog/blog.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'tag', 'blog']
};

const rootReducer = combineReducers({
    user: userReducer,
    tag: tagsReducer,
    blog: blogReducer
});
export default persistReducer(persistConfig, rootReducer);