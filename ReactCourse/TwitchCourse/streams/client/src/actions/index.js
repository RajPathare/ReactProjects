import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from './types';

import streams from '../apis/streams';
import history from '../history';


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const { userId } = getState().auth; // getState can be used for fetching states from the store. 
        // Here we are fetching userId (Google ID) of the logged in user and then we pass this ID in the obj while creating a stream.
        // We do this so that the logged in user can delete his/her stream and just view streams created by someone else.

                                                        // here we append userId to the formValues (id,title,description,userId)
        const response = await streams.post('/streams', { ...formValues, userId });

        dispatch({ type: CREATE_STREAM, payload: response.data });
        // after successfully creating a stream, we need to programmatically navigate the user back to the home page
        history.push('/');
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');

        dispatch({ type: FETCH_STREAMS, payload: response.data });
    }
}

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);

        dispatch({ type: FETCH_STREAM, payload: response.data });
    }
}

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.put(`/streams/${id}`, formValues);

        dispatch({ type: EDIT_STREAM, payload: response.data });
    }
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);

        dispatch({ type: DELETE_STREAM, payload: id });
    }
}