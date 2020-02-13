import axios from "axios";
import {
    GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAILED, API_URL, ADD_POSTS_LOADING,
    ADD_POSTS_FAILED, ADD_POSTS_SUCCESS,
    GET_POST_LOADING, GET_POST_SUCCESS, GET_POST_FAILED,
    DELETE_POST_FAILED, DELETE_POST_SUCCESS, DELETE_POST_LOADING,
    EDIT_POST_FAILED, EDIT_POST_LOADING, EDIT_POST_SUCCESS

} from "../../helpers/types"


export const getPosts = () => {
    return dispatch => {
        dispatch({ type: GET_POSTS_LOADING, loading: true })
        axios
            .get(`${API_URL}/posts`)
            .then(data => {
                dispatch({ type: GET_POSTS_SUCCESS, payload: data.data })
            })
            .catch(err => {
                dispatch({ type: GET_POSTS_FAILED, error: err })
            })
    }
}


export const addPost = (post) => {
    return dispatch => {
        dispatch({ type: ADD_POSTS_LOADING })
        axios
            .post(`${API_URL}/posts`, post)
            .then(data => {
                dispatch({ type: ADD_POSTS_SUCCESS, payload: data.data })
            })
            .catch(err => {
                dispatch({ type: ADD_POSTS_FAILED, error: err })
            })
    }
}


export const getPostsById = (id) => {
    return dispatch => {
        dispatch({ type: GET_POST_LOADING, loading: true })
        axios
            .get(`${API_URL}/posts/${id}`)
            .then(data => {

                dispatch({ type: GET_POST_SUCCESS, payload: data.data })
            })
            .catch(err => {
                debugger;
                dispatch({ type: GET_POST_FAILED, error: err })
            })
    }
}

export const deletePostsById = (id) => {
    return dispatch => {
        dispatch({ type: DELETE_POST_LOADING, loading: true })
        axios
            .delete(`${API_URL}/posts/${id}`)
            .then(data => {

                dispatch({ type: DELETE_POST_SUCCESS, payload: id })
            })
            .catch(err => {
                debugger;
                dispatch({ type: DELETE_POST_FAILED, error: err })
            })
    }
}

export const editPost = (post) => {
    return dispatch => {
        dispatch({ type: EDIT_POST_LOADING, loading: true })
        axios
            .put(`${API_URL}/posts/${post.id}`)
            .then(data => {

                dispatch({ type: EDIT_POST_SUCCESS, payload: post })
            })
            .catch(err => {
                debugger;
                dispatch({ type: EDIT_POST_FAILED, error: err })
            })
    }
}