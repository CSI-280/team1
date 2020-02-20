import React from 'react';
import Pet from '../pet.js';


function signIn() {
    return (
		<input type="text" id="user" value="Username">
		<input type="Password" id="Password" value="Password">

		<button>Enter</button>
    )
}

export default signIn;