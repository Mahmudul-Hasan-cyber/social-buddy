import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import Comment from '../Comment/Comment';

const CommentDetail = (props) => {
    const [post, setPost] = useState([])
    const { postId } = useParams()
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
            .then(resp => resp.json())
            .then(data => setComments(data))
    }, [])


    useEffect(() => {
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(postUrl)
            .then(resp => resp.json())
            .then(data => setPost(data))
    }, [])
    return (
            <div>
                <Post post={post} />
                <h4>Comments:</h4>
                {
                    comments.map(comment =>
                        <Comment key={comment.id} comment={comment} />
                    )
                }
            </div> 
    );
};

export default CommentDetail;