import React from 'react';
import './NewPost.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import blogFatch from '../axios/config';

const NewPost = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

const createPost = async (e) => {
    e.preventDefault();
    const post = { title, body, userId: 1};

    await blogFatch.post('/posts', {
      body: post,
    });

    navigate('/');
};

    return (
        <div className="new-post">
            <h2>Inserir novo Post</h2>
            <form onSubmit={createPost}>
                <div className="form-control">
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Digite o titulo"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Título:</label>
                    <textarea name="body" id="area" placeholder='Digite o conteudo'></textarea>
                    onChange={(e) => setBody(e.target.value)}
                </div>
                <input type="submit" value={"Criar Post"} className='btn'/>
            </form>
        </div>
    );
};

export default NewPost;
