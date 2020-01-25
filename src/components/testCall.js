import react from 'react';
import pf from './pf.js';
//var petfinder = require("@petfinder/petfinder-js");

//const pf = new petfinder.Client({apiKey: "L7xN9DjGWgJENiTju1kRMvoFeuxtDVPDXJhLhzCbKHP8uXgCEZ", secret: "mCJgTIn4QFV0pBoQXsNz0YPPKQzbraELqfonphtm"});


function Test() 
{
    return (
        pf.animal.search().then(resp =>{console.log(resp.data.animal)})
    )
}
export default Test