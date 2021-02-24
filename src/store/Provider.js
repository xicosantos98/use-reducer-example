import React, { useEffect, createContext, useReducer } from 'react';
import {
    reducer, startAsyncAction, fetchPostsComplete, addPost
} from './reducer';

export const Context = createContext();

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

const Provider = props => {
    const [state, dispatch] = useReducer(reducer, {
        posts: [],
        isLoading: false,
        postSelected: null
    });

    useEffect(() => {
        dispatch(startAsyncAction());
        return fetch(`${BASE_URL}/posts`)
            .then(response => response.json())
            .then(data => dispatch(fetchPostsComplete(data)));
    }, []);

    const createPost = (title, body) => {
        dispatch(startAsyncAction());
        return fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(addPost(data));
            });
    };

    return (
        <Context.Provider value={{ state, dispatch, createPost }}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;
