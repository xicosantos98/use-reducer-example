import React, { useContext } from 'react';
import { Context } from '../store/Provider';
import {
    selectPost
} from '../store/reducer';

export default function TodoList() {
    const { state, dispatch } = useContext(Context);
    return (
        <div className='PostList'>
            {state.isLoading ?
                <p>Loading ...</p> :
                state.posts.map((p, i) => (
                    <div key={i} style={{ display: 'flex' }}>
                        <p style={{ margin: 0 }}>{p.title}</p>
                        <button onClick={() => dispatch(selectPost(p.id))}>See More</button>
                    </div>
                ))
            }
        </div>
    );
}
