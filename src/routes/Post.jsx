import blogFatch from '../axios/config';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Post.css';

const Post = () => {
    const [post, setPost] = useState({});
    const {id} = useParams();

    const getPost = async (params) => {
        try {
            const response = await blogFatch.get(`/posts/${params}`);
            const data = response.data;
            setPost(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPost(id);
    }, []);

    return (
        <div className="post-container">
            {!post.title ? (
                <p>Carregando...</p>
            ) : (
                <div className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/`} className="btn">
                        Voltar
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Post;
