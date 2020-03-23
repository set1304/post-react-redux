import {CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT} from "./types";

export function createPost(post) {
    return{
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async dispatch => {
        try {
            dispatch(loadingIsTrue())
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const json = await res.json();
            dispatch({type: FETCH_POSTS, payload: json});
            dispatch(loadingIsFalse())
        } catch (e) {
            dispatch(showAlert('Что то пошло не так'))
            dispatch(hideAlert())
        }
    }
}

export function loadingIsTrue() {
    return {
        type: SHOW_LOADER
    }
}

export function loadingIsFalse() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        });
        setTimeout(() => {dispatch(hideAlert())}, 2000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}