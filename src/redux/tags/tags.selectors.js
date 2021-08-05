import {createSelector} from "reselect";

const selectTags = state => state.tag;

export const selectTag = createSelector(
    [selectTags],
    (tag) => tag.tags
);