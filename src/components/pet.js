import React from 'react';
import miss from './images/no-Photo.jpg';
import pf from './pf.js';
import './styles/adoptStyle.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Pet extends React.Component {
    
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
            display: false,
            type: "",
        }

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

    /*get an image from the API*/
    getPet(aType)
    {
        this.setState({image: miss,});
        this.display = true;
        
        
        
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
                <DropdownButton title="Dropdown">
                    <Dropdown.Item onClick={() =>{this.getPet("Dog")}}>Dog</Dropdown.Item>
                    <Dropdown.Item onClick={() =>{this.getPet("Cat")}}>Cat</Dropdown.Item>
                    <Dropdown.Item onClick={() =>{this.getPet("Rabbit")}}>Rabbit</Dropdown.Item>
                    <Dropdown.Item onClick={() =>{this.getPet("Small & Furry")}}>Small and Furry</Dropdown.Item>
                    <Dropdown.Item onClick={() =>{this.getPet("Horse")}}>Horse</Dropdown.Item>
                    <Dropdown.Item onClick={() =>{this.getPet("Bird")}}>Bird</Dropdown.Item>
                    <Dropdown.Item onClick={() =>{this.getPet("Scales, Fins & Others")}}>Scales, Fins and Others</Dropdown.Item>
                    <Dropdown.Item onClick={() =>{this.getPet("Barnyard")}}>Barnyard</Dropdown.Item>
                </DropdownButton>
                {content}
            </React.Fragment>
        );
    }
}
const nameStyle = {
}

const infoStyle = {
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
    margin: '2%',
    padding: '.5%',
    'font-size': '2vw'
}

{/* <React.Fragment>
                <DropdownButton title="Dropdown">
                    <Dropdown.Item href={this.setState("Dog")}>Dog</Dropdown.Item>
                    <Dropdown.Item> href={this.setState("Cat")}Cat</Dropdown.Item>
                    <Dropdown.Item>Item 3</Dropdown.Item>
                </DropdownButton>
                <h1>Adopt</h1>
                <Pet index="0" type={this.state.type} />
            </React.Fragment> */}

export default Pet;