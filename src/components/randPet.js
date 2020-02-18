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
            display: false,
            prevType: "",
        };
    }
    //mouseOver/Leave are for the button
    mouseOver = (e) => {
        e.target.style.backgroundColor = '#7D7D7D';
    }
    mouseLeave = (e) => {
        e.target.style.backgroundColor = '#333';

    }

    linkCursor = (e) => {
        e.target.style.cursor = 'pointer';
    }


    handleClick = () => {
        this.display = true;
        this.genRand();
        this.setState({image: miss});
    };

    /*gets random animal*/
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
            //gets random type from array, while making sure its not the same type as before
            do {
                var type = types[Math.floor(Math.random() * types.length)];                
            } while(type === this.state.prevType);

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
                    type: resp.data.animals[this.props.index].type,
                    prevType: resp.data.animals[this.props.index].type,
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
        const disp = this.display;
        let content;
        //If display, then show the animal
        if (disp) {
            content = 
            <React.Fragment>
                <h1 style={nameStyle} onClick={() => window.open(this.state.link)} onMouseOver={this.linkCursor}>{this.state.name}</h1>
                <h3 style={infoStyle}>{this.state.type} - {this.state.breed}</h3>
                <h3 style={infoStyle}>{this.state.gender} - {this.state.age}</h3>
                <img style={imgStyle} src = {this.state.image} alt={this.state.type} onClick={() => window.open(this.state.link)} onMouseOver={this.linkCursor}/>
            </React.Fragment>;
        }

        return (
            <React.Fragment>
                <button style={buttonStyle} onClick={this.handleClick} onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>Generate Random Pet</button>
                {content}
            </React.Fragment>
        );
    }
}


const nameStyle = {
    margin: '10px',
}

const infoStyle = {
    margin: '10px',
}


const imgStyle = {
    width: '30%',
    height: "auto",
    borderRadius: '7%',
}

const buttonStyle = {
    color: '#A9CBD3 ',
    backgroundColor: '#333',
    textAlign: 'center',
    borderRadius: '15px',
    border: 'none',
    margin: '10px',
    padding: '.5%',
    fontSize: '20px'
}

export default RandomPet;