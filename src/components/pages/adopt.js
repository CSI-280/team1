import React from 'react';
import Pet from '../pet.js'

function Adopt() {
    return (
        <React.Fragment>
            <Pet index="0"/>
            <Pet index="1"/>
            <Pet index="2" />
        </React.Fragment>
    )
}

export default Adopt;