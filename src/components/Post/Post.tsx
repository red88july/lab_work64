import {NavLink, useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import axiosApi from '../../axiosApi.ts';

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({
        date: "",
        title: "",
        message: "",
    });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosApi.get(`posts/${postId}.json`);
                setPost(response.data.posts);
            } catch (error) {
                console.error('Error fetching post data:', error);
            }
        };
        fetchPost();
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="d-flex flex-column border border-3 border-success rounded-2 p-3 post-size">
                <span className="mb-3">
                    <b><i>Created on: </i></b>{post.date}
                </span>
                <h4 className="mb-3">{post.title}</h4>
                <p>{post.message}</p>
              <div className="d-flex justify-content-end gap-3">
                <NavLink to={`/posts/${post.id}`} className="w-25 btn btn-danger text-center ps-3">Delete</NavLink>
                <NavLink to={`/posts/${post.id}`} className="w-25 btn btn-primary text-center ps-3">Edit</NavLink>
              </div>
            </div>
        </div>
    );
};

export default Post;