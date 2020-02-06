import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Pet Finder</h1>
            <Link style={linkStyle} to="/">Home</Link>
            <span> | </span>
            <Link style={linkStyle} to="/about">About</Link>
			
			<div style={barStyle}>
				<form action="/searchresults">
					<input id="search" style={inputStyle} type="text" placeholder="Type here..."/>
					<input style={searchButton} type="submit" value="Search" />
				</form>
			</div>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'center'
}


const barStyle = {
	padding: '6px',
};

// style for the look of the bar
const inputStyle = {
	height: '22px',
	width: '250px',
	fontSize: '20px'
}

// style of the button
const searchButton = {
	fontSize: '20px'
}

export default Header