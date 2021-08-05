import {TagsActionTypes} from "./tags.types";

//destructing the action types
const {SET_TAG} = TagsActionTypes;

export const setTag = tag => ({
    type: SET_TAG,
    payload: tag
})