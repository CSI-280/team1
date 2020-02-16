import React from 'react';
import dog from './../images/dog.jpg';
import Pet from '../pet.js';
import '../styles/homeStyle.css';


function Home() {
    return (
        <container>
            <div id="left">
                <img style={dogStyle} src={dog} alt="this is a dog" wdith="300" height="350"/>
            </div>
            <div id="right">
                <h3>Aviable Dogs</h3>
                <Pet index="0"/>
                <Pet index="1"/>
                <Pet index="2"/>
                <Pet index="3"/>
            </div>
        </container>
    )
}

const dogStyle = {
    padding: '10px'
}
export default Home
