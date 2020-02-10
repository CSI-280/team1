import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <Link style={linkStyle} to="/"><h1>Pet Finder</h1></Link>
            <Link style={linkStyle} to="/">Home</Link>
            <span> | </span>
            <Link style={linkStyle} to="/adopt">Adopt</Link>
            <span> | </span>
            <Link style={linkStyle} to="/randomPet">Random Pet</Link>
            <span> | </span>
            <Link style={linkStyle} to="/searchresults">Search</Link>
            <span> | </span>
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#A9CBD3',
    textAlign: 'center',
    padding: '10px',
}

const linkStyle = {
    color: '#A9CBD3',
    textDecoration: 'none',
    textAlign: 'center'
}

export default Header