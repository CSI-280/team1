import React from 'react';
import Pet from '../pet.js'

function Adopt() {
    return (
        <React.Fragment>
            <Pet />
            <Pet index="1"/>
        </React.Fragment>
    )
}

export default Adopt;