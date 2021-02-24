import React from 'react';
import './App.css';
import PostLists from './components/PostsList';
import AddPost from './components/AddPost';
import PostDetails from './components/PostDetails';

function App() {
    return (
        <div className='App'>
            <h1>Posts List</h1>
            <h3>React hooks with async useReducer example</h3>
            <hr />
            <AddPost />
            <hr />
            <PostLists />
            <hr />
            <PostDetails />
        </div>
    );
}

export default App;
