import React, { useContext } from 'react';
import { Context } from '../store/Provider';

export default function AddTodo() {
    const { createPost } = useContext(Context);
    const handleSubmit = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        if (!title || !body)
            return null;
        return createPost(title, body);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' name='title' />
            <label>Body</label>
            <input type='text' name='body' />
            <input type='submit' value='Add' />
        </form>
    );
}
