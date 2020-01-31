import React from 'react';
import miss from './images/no-Photo.jpg';
import pf from './pf.js';

class Pet extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            image: miss,
            name: "name", 
            gender: "gender", 
            age: "age",
            breed: "breed",
            link: "link",
            index: 0
        }

        this.getImage();
    }

    /*get an image from the API*/
    getImage()
    {
        /* declare variables */
        let len;

        /*API Search*/
        pf.animal.search({type: "dog", status: "adoptable"})
        .then(resp =>{

            /* output photots array to console for testing */
            console.log(resp.data.animals[this.state.index]);

            this.setState({
                name: resp.data.animals[this.state.index].name, 
                gender: resp.data.animals[this.state.index].gender, 
                age: resp.data.animals[this.state.index].age,
                breed: resp.data.animals[this.state.index].breeds.primary,
                link: resp.data.animals[this.state.index].url
            })

            /* get length of photos array */
            len=resp.data.animals[this.state.index].photos.length;

            /*if length > 1 get img*/
            if (len > 0)
            {
                this.setState({
                    image: resp.data.animals[this.state.index].photos[0].medium
                })
            }
        })
    };

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This dog is adoptable</p>
                <img src={this.state.image} alt="Adoptable Dog" width="300" height="400"/>
                <p>Name: {this.state.name}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Age: {this.state.age}</p>
                <p>Breed: {this.state.breed}</p>
                <p><a href={this.state.link} target="_blank">Adopt Me!</a></p>
            </div>
        )
    }
}

export default Pet;