import * as api from "../lib/api";
import { handleActions } from "redux-actions";

// declare action type
// three per a request
const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE'

// make thunk function
// dispatch a different action by when started, succeeded, failed
export const getPost = id => async dispatch => {
    dispatch({ type: GET_POST });
    try {
        const response = await api.getPost(id)
        dispatch({
            type: GET_POST_SUCCESS,
            payload: response.data
        })
    } catch(e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        })
        throw e
    }
}

export const getUsers = () => async dispatch => {
    dispatch({ type: GET_USERS });
    try {
        const response = await api.getUser()
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data
        })
    } catch(e) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true
        })
        throw e
    }
}

// declare initial state
// loading object controls the loading state
const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
}

const sample = handleActions(
    {
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                // request started
                GET_POST: true
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                // request succeeded
                GET_POST: false
            },
            post: action.payload
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                // request failed
                GET_POST: true
            },
        }),
        [GET_USERS]: state => ({
            ...state,
            loading: {
                ...state.loading,
                // request started
                GET_USERS: true
            }
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                // request succeeded
                GET_USERS: false
            },
            post: action.payload
        }),
        [GET_USERS_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                // request failed
                GET_USERS: false
            },
        }),
    },
    initialState
)

export default sample











