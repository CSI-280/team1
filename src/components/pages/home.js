import React from 'react';
import dog from './../images/dog.jpg';
import pf from '../pf.js';

function Home() {
    console.log("starting search");
    pf.animal.search({type: "Dog"})
    .then(resp =>{
        console.log(resp.data.animal)
    });
    return (
        <img src={dog} alt="this is a dog" />
    )
}

export default Home
