import {
    GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAILED, GET_POST_LOADING, GET_POST_SUCCESS, GET_POST_FAILED, ADD_POSTS_LOADING, ADD_POSTS_FAILED, ADD_POSTS_SUCCESS,
    DELETE_POST_FAILED, DELETE_POST_SUCCESS, DELETE_POST_LOADING,
    EDIT_POST_FAILED, EDIT_POST_LOADING, EDIT_POST_SUCCESS
} from "../../helpers/types"

let initState = { posts: [], post: {}, postLoading: false, addloading: false, deleteloading: false, postErr: null, singlePostLoading: false, editLoading: false };

export default function (state = initState, action) {
    switch (action.type) {
        case GET_POSTS_LOADING: {
            return { ...state, posts: [], postLoading: true, postErr: null }
        }
        case GET_POSTS_SUCCESS: {
            return { ...state, posts: action.payload, postLoading: false, postErr: null }
        }
        case GET_POSTS_FAILED: {
            return { ...state, posts: [], postLoading: false, postErr: action.error }
        }
        case GET_POST_LOADING: {

            return { ...state, post: {}, singlePostLoading: true, postErr: null }
        }
        case GET_POST_SUCCESS: {

            return { ...state, post: action.payload, singlePostLoading: false, postErr: null }
        }
        case GET_POST_FAILED: {
            return { ...state, post: {}, singlePostLoading: false, postErr: action.error }
        }
        case ADD_POSTS_LOADING: {
            return { ...state, addloading: true, postErr: null }
        }
        case ADD_POSTS_SUCCESS: {
            return { ...state, posts: [action.payload, ...state.posts], addloading: false, postErr: null }
        }

        case ADD_POSTS_FAILED: {
            return { ...state, addloading: false, postErr: action.error }
        }

        case DELETE_POST_LOADING: {
            return { ...state, deleteloading: true, postErr: null }
        }
        case DELETE_POST_SUCCESS: {
            const indexToDelete = state.posts.findIndex(p => p.id === action.payload);
            return {
                ...state,
                posts: indexToDelete > -1 ? [
                    ...state.posts.slice(0, indexToDelete),
                    ...state.posts.slice(indexToDelete + 1),
                ] : state.posts, deleteloading: false, postErr: null
            }

        }
        case DELETE_POST_FAILED: {
            return { ...state, deleteloading: false, postErr: action.error }
        }

        case EDIT_POST_LOADING: {
            return { ...state, editLoading: true, postErr: null }
        }
        case EDIT_POST_SUCCESS: {
            const indexToUpdate = state.posts.findIndex(p => p.id === action.payload.id);
            return {
                ...state,
                posts: indexToUpdate > -1 ? [
                    ...state.posts.slice(0, indexToUpdate),
                    action.payload,
                    ...state.posts.slice(indexToUpdate + 1),
                ] : state.posts, editLoading: false, postErr: null
            }

        }

        case EDIT_POST_FAILED: {
            return { ...state, editLoading: false, postErr: action.error }
        }


        default: { return state }


    }
}