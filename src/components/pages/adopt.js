import React from 'react';
import Pet from '../pet.js';

function Adopt() {
    return (
        <React.Fragment>
            <h1>Adopt</h1>
            <Pet index="0"/>
            <Pet index="1"/>
            <Pet index="2"/>
            <Pet index="3"/>
            <Pet index="4"/>
            <Pet index="5"/>
        </React.Fragment>
    )
}

export default Adopt;