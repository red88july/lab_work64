import '../../styles.css';
import axiosApi from '../../axiosApi.ts';
import {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";

interface Post {
    id: string,
    date: string;
    title: string;
}

const Home = () => {
    const [postList, setPostList] = useState<Post[]>([]);

    const getPosts = async () => {
        const response = await axiosApi.get('posts.json');
        return response.data;
    };

    const fetchData = async () => {
        try {
            const postsObject = await getPosts();
            if (postsObject && typeof postsObject === 'object') {
                const postsArray = Object.keys(postsObject).map(key => ({
                    id: key,
                    date: postsObject[key].posts.date,
                    title: postsObject[key].posts.title,
                }));

                setPostList(postsArray);
            } else {
                console.error('Invalid response format:', postsObject);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    });

    return (
        <>
            {postList.map((post, index) => (
                <div key={index} className="d-flex justify-content-center align-items-center mt-5">
                    <div className="d-flex flex-column border border-3 border-success rounded-2 p-3 post-size">
                        <span className="mb-3">
                            <b><i>Created on: </i></b>{post.date}
                        </span>
                        <h4 className="mb-3">{post.title}</h4>
                        <NavLink to={`/posts/${post.id}`} className="btn-read w-25 btn btn-success text-start ps-3">Read more</NavLink>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Home;