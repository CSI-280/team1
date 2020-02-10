import React from 'react';
import dog from './../images/dog.jpg';

function Home() {
    return (
        <img style={dogStyle} src={dog} alt="this is a dog" />
    )
}

const dogStyle = {
    padding: '10px'
}
export default Home
