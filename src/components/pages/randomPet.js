import React from 'react';
import RandPet from '../randPet';

function randomPet() {
    return (
        <React.Fragment>
             <RandPet index="0"/>
        </React.Fragment>
    )
}

const buttonStyle = {
    color: '#8700FF',
    textAlign: 'center',
}
export default randomPet