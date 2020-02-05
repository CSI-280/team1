import React from 'react';
import miss from './images/no-Photo.jpg';
import pf from './pf.js';

class RandomPet extends React.Component {
    
    //Got this code from pet.js (written by Nate) and modifieed it to get a random pet
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            //set defaults
            image: miss,
            name: "Loading...", 
            gender: "Loading...", 
            age: "Loading...",
            breed: "Loading...",
            link: "Loading...",
            type: "",
        }

        //call function
        this.genRand();
    }

    /*get an image from the API*/
    genRand()
    {
        //holds all types of animals
        var types = [];
        //gets all types of animals     
        pf.animalData.types()
        .then(resp => {
            for(var i=0; i < 8; i++){
                types[i] = resp.data.types[i].name;
            }
        
            /* declare variables */
            let len;
            //gets random type
            var type = types[Math.floor(Math.random() * types.length)];
            console.log(type);
            /*API Search*/
            pf.animal.search({type: type})
            .then(resp =>{                
                //set variables 
                this.setState({
                    name: resp.data.animals[this.props.index].name, 
                    gender: resp.data.animals[this.props.index].gender, 
                    age: resp.data.animals[this.props.index].age,
                    breed: resp.data.animals[this.props.index].breeds.primary,
                    link: resp.data.animals[this.props.index].url,
                    type: resp.data.animals[this.props.index].type
                })

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
        });
    };


    render() {
        return (
            <React.Fragment>
                 <h1>{this.state.type}</h1>
                 <h3>{this.state.name}</h3>
                 <h3>{this.state.gender}</h3>
                 <h3>{this.state.age}</h3>
                 <h3>{this.state.breed}</h3>
                 <img src = {this.state.image} alt={this.state.type}/>
            </React.Fragment>
        )
    }
}


export default RandomPet;