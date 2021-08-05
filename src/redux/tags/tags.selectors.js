import {createSelector} from "reselect";

const selectTags = state => state.user;

export const selectTag = createSelector(
    [selectTags],
    (tag) => tag.tags
);

