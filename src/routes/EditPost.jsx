import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import blogFatch from '../axios/config';

const EditPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const getPost = async (params) => {
        try {
            const response = await blogFatch.get(`/posts/${params}`);
            const data = response.data;
            setTitle(data.title);
            setBody(data.body);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPost(id);
    }, []);

    const editPost = async (e) => {
        e.preventDefault();
        const post = { title, body };
        await blogFatch.put(`/posts/${id}`, {
            body: post,
        });
        navigate('/');
    };

    return (
        <div className="new-post">
            <h2>Editando: {title}</h2>
            <form onSubmit={(e) => editPost(e)}>
                <div className="form-control">
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Digite o titulo"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title || ''}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Título:</label>
                    <textarea
                        name="body"
                        id="area"
                        placeholder="Digite o conteudo"
                        onChange={(e) => setBody(e.target.value)}
                        value={body || ''}
                    ></textarea>
                </div>
                <input type="submit" value={'Editar Post'} className="btn" />
            </form>
        </div>
    );
};

export default EditPost;
