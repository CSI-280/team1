import React from 'react';
import pf from './pf.js';
import './styles/adoptStyle.css';
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
            type: ""
        }
        console.log("in contructor");
        if (this.props.button === "false") {
            this.setPet(this.props.typePassed);
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


    handleClick = () => {
        this.display = true;
        this.genRand();
    };

    setPet (newType) {
        this.state.type = newType;
        this.getPet();
    }

    /*get an image from the API*/
    getPet()
    {
        this.display = true;        
        
        /* declare variables */
        let len;

            pf.animal.search({type: this.state.type, status: "adoptable"})
            .then(resp =>{

                /* output photots array to console for testing */
                console.log(resp.data.animals);
                // generating random index based on length of resp.data.animals
                var index = (Math.floor(Math.random() * (0 - resp.data.animals.length + 1) + 0)) * -1;
                
                //set variables 
                this.setState({
                    name: resp.data.animals[index].name, 
                    gender: resp.data.animals[index].gender, 
                    age: resp.data.animals[index].age,
                    breed: resp.data.animals[index].breeds.primary,
                    link: resp.data.animals[index].url,
                })

                /* get length of photos array */
                len=resp.data.animals[index].photos.length;

                /*if length > 1 get img*/
                if (len > 0)
                {
                    //set image variable
                    this.setState({
                        image: resp.data.animals[index].photos[0].medium
                    })
                }
                else {
                    this.setState({image: this.state.images[Math.floor(Math.random() * this.state.images.length)],});
                }
            })
    };

    render() {
        const disp = this.display;
        const dispButton = this.props.button;
        let content;
        let buttons;
        //If display, then show the animal
        if (disp) {
            content = 
            <div className="col" onClick={() => window.open(this.state.link)} onMouseOver={() => this.style="background-color: #292c34;"}>
                <a href={this.state.link} target="_blank" rel="noopener"></a>
                <h3>{this.state.name} is adoptable</h3>
                <img src={this.state.image} alt="Adoptable Dog" />
                <p>{this.state.age} {this.state.gender} {this.state.breed}</p>
            </div>
        }
        if (dispButton === "true") {
            buttons =
            <div>
                <button style={buttonStyle} onClick={() =>{this.setPet("Dog")}}>Dog</button>
                <button style={buttonStyle} onClick={() =>{this.setPet("Cat")}}>Cat</button>
                <button style={buttonStyle} onClick={() =>{this.setPet("Rabbit")}}>Rabbit</button>
                <button style={buttonStyle} onClick={() =>{this.setPet("Small & Furry")}}>Small and Furry</button>
                <button style={buttonStyle} onClick={() =>{this.setPet("Horse")}}>Horse</button>
                <button style={buttonStyle} onClick={() =>{this.setPet("Bird")}}>Bird</button>
                <button style={buttonStyle} onClick={() =>{this.setPet("Scales, Fins & Other")}}>Scales, Fins and Others</button>
                <button style={buttonStyle} onClick={() =>{this.setPet("Barnyard")}}>Barnyard</button>
            </div>
        }

        return (
            <React.Fragment>
                {buttons}
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

export default Pet;