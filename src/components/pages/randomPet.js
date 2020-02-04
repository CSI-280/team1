import React from 'react';
import miss from '../images/no-Photo.jpg';
import pf from '../pf.js';

class RandomPet extends React.Component {
    
    //Got this code from pet.js (written by Nate) and modifieed it to get a random pet

    //Gets random pet
    genRand()
    {       
        //holds all types of animals
        var animalTypes = {};
        //gets all types of animals
        pf.animal.types()
        .then(resp => {
            /* output photots array to console for testing */
            console.log(resp.data.animals[this.props.index]);
        });
        /* declare variables */
        let len;

        /*API Search*/
        pf.animal.search({type: "dog", status: "adoptable"})
        .then(resp =>{

            /* output photots array to console for testing */
            console.log(resp.data.animals[this.props.index]);

            /* get length of photos array */
            len=resp.data.animals[this.props.index].photos.length;

            /*if length > 1 get img*/
            if (len > 0)
            {
                //set image variable
                this.setState({
                    image: resp.data.animals[this.props.index].photos[0].medium
                })
            }
        })
    };


    render() {
        return (
            <React.Fragment>
                <button style={buttonStyle} onClick={this.genRand}>Generate Random Pet!</button>
            </React.Fragment>
        )
    }
}

const buttonStyle = {
    color: '#8700FF',
    textAlign: 'center',
}

export default RandomPet;