import React from 'react';
import dog from './../images/dog.jpg';
import pf from '../pf.js';

function Home() {
    pf.animal.search({type: "Dog"})
    .then(resp =>{
        console.log("starting search...");
        console.log("Search results", resp.data.animals)
        console.log("First animal results", resp.data.animals[0])
        console.log("First animal name: ", resp.data.animals[0].name)
        console.log("...search complete");
    });
    return (
        <img src={dog} alt="this is a dog" />
    )
}

export default Home
