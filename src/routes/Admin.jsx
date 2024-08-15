import blogFatch from '../axios/config'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
    const [posts, setPosts] = useState([]);

    const getPost = async () => {
        try {
            const response = await blogFatch.get('/posts');
            const data = response.data;
            setPosts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPost();
    }, []);

  return (
    <div className="admin">
            <h1>Gerenciar Posts</h1>
            {posts.length === 0 ? (
                <p>Carregando...</p>
            ) : (
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <div className="actions">
                            <Link className='btn edit-btn'>Editar</Link>
                            <button className='btn delete-btn'>Excluir</button>
                        </div>
                    </div>
                ))
            )}
        </div>
  )
}

export default Admin