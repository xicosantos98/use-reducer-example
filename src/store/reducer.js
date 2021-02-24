// action names
const PENDING_ACTION = 'PENDING_ACTION';
const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';
const ADD_POST = 'ADD_POST';
const SELECT_POST = 'SELECT_POST';

// action creators
export const startAsyncAction = () => ({
    type: PENDING_ACTION
});

export const fetchPostsComplete = data => ({
    type: FETCH_POSTS_COMPLETE,
    data
});

export const addPost = data => ({
    type: ADD_POST,
    data
});

export const selectPost = id => ({
    type: SELECT_POST,
    data: { id }
});

export const reducer = (state, { type, data }) => {
    switch (type) {
        case PENDING_ACTION:
            return { ...state, isLoading: true };
        case FETCH_POSTS_COMPLETE:
            return { ...state, posts: data.slice(0, 10), isLoading: !state.isLoading };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, data],
                isLoading: !state.isLoading
            };
        case SELECT_POST:
            return { ...state, postSelected: state.posts.find(p => p.id === data.id) };
        default:
            return state;
    }
};
