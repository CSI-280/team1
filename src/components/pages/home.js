import React from 'react';
import dog from './../images/dog.jpg';
import pf from '../pf.js';

function Home() {
    var img;
   // pf.animal.search({type: "Dog"})
    pf.animal.search({age: "baby", gender: "female", status: "adoptable"})
    .then(resp =>{
        console.log("starting search...");
        console.log("Search results", resp.data.animals)
        console.log("First animal results", resp.data.animals[0])
        console.log("First animal name: ", resp.data.animals[0].name)
        console.log("...search complete");
        img=resp.data.animals[0].photos[0].large
        console.log(img)
    });
    return (
        <img src={dog} alt="this is a dog" />
    )
}

export default Home
