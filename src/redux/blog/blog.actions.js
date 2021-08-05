import {BlogActionTypes} from './blog.types.js';

//destructing the action types
const {SET_BLOG} = BlogActionTypes;

export const setBlog = blog => ({
	type: SET_BLOG,
	payload: blog
});