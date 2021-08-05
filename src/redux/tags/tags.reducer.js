import {TagsActionTypes} from "./tags.types";

//destructing the action types
const {SET_TAG} = TagsActionTypes;

const INITIAL_STATE = {
    tags: ''
}
const tagsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SET_TAG:
            return {
                ...state,
                tags: action.payload
            }
        default:
            return state;
    }
}

export default tagsReducer;