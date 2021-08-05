import {BlogActionTypes} from './blog.types.js';

const initialState = {
	blog: {}
}

//destructing the action types
const {SET_BLOG} = BlogActionTypes;

const blogReducer =  (state = initialState, { type, payload }) => {
	switch (type) {

	case SET_BLOG:
		return { 
			...state, 
			blog: payload 
		}

	default:
		return state
	}
}

export default blogReducer;