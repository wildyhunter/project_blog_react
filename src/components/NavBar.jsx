import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <h1>
                <Link to={'/'}>Blog</Link>
            </h1>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/admin'}>Gerenciar</Link>
                </li>
                <li>
                    <Link to={'/new'} className="new-btn">
                        Novo Post
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
