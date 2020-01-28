import React from 'react';
import pf from '../pf.js';

function About() {
    var img;
    pf.animal.search({age: "baby", gender: "female", status: "adoptable"})
    .then(resp =>{
        img=resp.data.animals[0].photos[0].large
        console.log(img)
    });
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is a paragraloihjnas look at m,e typing, wow im so special</p>
            <img src={img} alt="this is a dog" />
        </React.Fragment>
    )
}


export default About;