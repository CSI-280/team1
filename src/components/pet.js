import React from 'react';
import miss from './images/no-Photo.jpg';
import pf from './pf.js';
import './styles/adoptStyle.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import photo1 from './images/funnyMeme.jpg';
import photo2 from './images/funnyMeme2.jpg';
import photo3 from './images/funnyMeme3.jpg';

class Pet extends React.Component {
    
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            //set defaults
            //array of images used if no image is available for animal
            images: [photo1, photo2, photo3],
            image: photo1,
            name: "Loading...", 
            gender: "Loading...", 
            age: "Loading...",
            breed: "Loading...",
            link: "Loading...",
            display: false,
            type: "",
            id: "",
            prevId: 1,
        }

    }

    /*get an image from the API*/
    getPet(aType)
    {
        this.display = true;
        this.setState({prevId: this.state.id, })
        console.log(this.state.prevId + "and" + this.state.id);
        
        
        
        /* declare variables */
        let len;

            pf.animal.search({type: aType, status: "adoptable"})
            .then(resp =>{

                /* output photots array to console for testing */
                console.log(resp.data.animals[this.props.index]);
                
                //set variables 
                this.setState({
                    name: resp.data.animals[this.props.index].name, 
                    gender: resp.data.animals[this.props.index].gender, 
                    age: resp.data.animals[this.props.index].age,
                    breed: resp.data.animals[this.props.index].breeds.primary,
                    link: resp.data.animals[this.props.index].url,
                    type: aType,
                    id: resp.data.animals[this.props.index].id,
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
                else {
                    this.setState({image: this.state.images[Math.floor(Math.random() * this.state.images.length)],});
                }
            })
    };

    render() {
        const disp = this.display;
        let content;
        //If display, then show the animal
        if (disp) {
            content = 
                <div className="col" onClick={() => window.open(this.state.link)} onMouseOver={() => this.style="background-color: #292c34;"}>
                    <a href={this.state.link} target="_blank" rel="noopener"></a>
                    <h3>{this.state.name} is adoptable</h3>
                    <img src={this.state.image} alt="Adoptable Dog" width="400" height="500"/>
                    <p>{this.state.age} {this.state.gender} {this.state.breed}</p>
                </div>
        }

        return (
            <React.Fragment>
                <div>
                    <button style={buttonStyle} onClick={() =>{this.getPet("Dog")}}>Dog</button>
                    <button style={buttonStyle} onClick={() =>{this.getPet("Cat")}}>Cat</button>
                    <button style={buttonStyle} onClick={() =>{this.getPet("Rabbit")}}>Rabbit</button>
                    <button style={buttonStyle} onClick={() =>{this.getPet("Small & Furry")}}>Small and Furry</button>
                    <button style={buttonStyle} onClick={() =>{this.getPet("Horse")}}>Horse</button>
                    <button style={buttonStyle} onClick={() =>{this.getPet("Bird")}}>Bird</button>
                    <button style={buttonStyle} onClick={() =>{this.getPet("Scales, Fins & Others")}}>Scales, Fins and Others</button>
                    <button style={buttonStyle} onClick={() =>{this.getPet("Barnyard")}}>Barnyard</button>
                </div>
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

const fragStyle = {
    clear: 'both',
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

export default Pet;