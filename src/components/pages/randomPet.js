import React from 'react';
import RandPet from '../randPet';

function randomPet() {
    return (
        <div style={pageStyle}>
             <RandPet index="0"/>
        </div>
    )
}
const pageStyle = {
    width: '100%',
    height: '100%',
    padding: '0px',
}
export default randomPet