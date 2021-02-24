import React, { useContext, useEffect, useState } from 'react';
import { Context, BASE_URL } from '../store/Provider';

export default function Post() {
    const { state } = useContext(Context);
    const [comments, setComments] = useState(null);
    useEffect(async () => {
        if (state.postSelected) {
            const response = await fetch(`${BASE_URL}/posts/${state.postSelected.id}/comments`);
            const json = await response.json();
            setComments(json);
        }
    }, [state.postSelected]);
    return (
        <div>
            {!state.postSelected ?
                <p>Select a post </p> :
                (
                    <div style={{ textAlign: 'left' }}>
                        <div>
                            <b>Title:  </b>
                            <span>{state.postSelected.title}</span>
                        </div>
                        <div>
                            <b>Body:  </b>
                            <span>{state.postSelected.body}</span>
                        </div>
                        <div>
                            {comments ? comments.map(c => (
                                <div className='comment'>
                                    <b>
                                        {c.email}
                                        :
                                        {' '}
                                    </b>
                                    <span>{c.body}</span>
                                </div>
                            )) : <p>Loading comments ...</p>}
                        </div>
                    </div>
                )
            }
        </div>
    );
}
