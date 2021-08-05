import { createSelector } from 'reselect'

export const selectBlogState = state => state.blog;

export const selectBlog = createSelector(
	[selectBlogState],
	(blog) => blog.blog
);