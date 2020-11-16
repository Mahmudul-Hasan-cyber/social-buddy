import React, { useEffect, useState, createContext } from 'react';
import Post from '../Post/Post';
export const PostContext = createContext({});

const PostDetail = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts.map(post =>
                    <Post key={post.id} post={post} commentButton={true}></Post>

                )
            }
        </div>
    );
};

export default PostDetail;