import { combineReducers } from 'redux';

//session management
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import tagsReducer from "./tags/tags.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};

const rootReducer = combineReducers({
    user: userReducer,
    tag: tagsReducer
});
export default persistReducer(persistConfig, rootReducer);